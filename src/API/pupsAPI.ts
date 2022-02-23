import axios from 'axios'
import errorHandler from '../utils/errorHandler'
import { MulticastResponse } from '../interfaces/multicastInterfaces'
import { Notification } from '../components'
import { notificationTypes } from '../components/notification/notification'
import { PUP, telemetryItem } from '../interfaces/pupsInterfaces'
import { PUPsResponse } from '../interfaces/apiInterfaces'

const ROOT_URL = process.env.REACT_APP_ROOT_HOST

const pupsAPI = {
  getPUPs: async () => {
    try {
      return await axios.post<PUPsResponse>(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPups"
      })
    } catch (err: any) {
      return errorHandler(err)
    }
  },

  getPUPsTypes: async () => {
    try {
      return await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPupTypes"
      })
    } catch (err: any) {
      return errorHandler(err)
    }
  },

  getPUPsTelemetry: async (ip: string, port: number) => {
    try {
      const response = await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPupsTelemetry",
        "pupsTelemetry" : [
          {
            ip,
            port
          }
        ]
      }
      )
      return response.data
    } catch (err: any) {
      return errorHandler(err)
    }
  },

  addNewPup: async (ip: string, port: number, DevId: number) => {
    try {
      const response = await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "addPup",
        "newPup" : {
          ip,
          port,
          DevId,
        }
      })
      if (response.data.errorAddPup.code === 0) {
        Notification({
          type: notificationTypes.SUCCESS,
          title: 'ПУП успешно создана',
          duration: 3
        })
      }
      return response.data
    } catch (err: any) {
      return errorHandler(err)
    }
  },

  deletePup: async (ip: string, port: number) => {
    try {
      const response = await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "deletePup",
        "deletePup" : {
          ip,
          port,
        }
      }
      )
      if (response.data.errorDeletePup.code === 0) {
        Notification({
          type: notificationTypes.INFO,
          title: 'ПУП успешно удалена',
          duration: 3
        })
      }
      return response.data
    } catch (err: any) {
      return errorHandler(err)
    }
  },

  getPUPsWithTelemetry: async () => {
    try {
      const PUPs = await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPups"
      })
      const telemetryParams = PUPs.data.pups.map((PUP:PUP) => ({ip: PUP.ip, port: PUP.port}))
      const PUPsTelemetry = await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPupsTelemetry",
        "pupsTelemetry" : [
          ...telemetryParams
        ]
      })
      const PUPsWithTelemetry = PUPs.data.pups.map((PUP: PUP) => {
        const telemetry = PUPsTelemetry.data.pupsTelemetry.find((telemetryItem: telemetryItem) => telemetryItem.ip === PUP.ip && telemetryItem.port === PUP.port)
        return {
          ...PUP,
          telemetry: {
            ...telemetry
          }
        }
      })
      return PUPsWithTelemetry
    } catch (err: any) {
      return errorHandler(err)
    }
  },
}

export default pupsAPI