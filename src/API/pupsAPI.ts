import axios from 'axios'
import errorHandler from '../utils/errorHandler'
import { MulticastResponse } from '../interfaces/multicastInterfaces'
import { Notification } from '../components'
import { notificationTypes } from '../components/notification/notification'

const ROOT_URL = process.env.REACT_APP_ROOT_HOST

const pupsAPI = {
  getPUPs: async () => {
    try {
      return await axios.post(`${ROOT_URL}`, {
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
      return response.data
    } catch (err: any) {
      return errorHandler(err)
    }
  }
}

export default pupsAPI