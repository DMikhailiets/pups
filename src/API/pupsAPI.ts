import axios from 'axios'
import errorHandler from '../utils/errorHandler'

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
  }
}

export default pupsAPI