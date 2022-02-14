import axios from 'axios'
import errorHandler from '../utils/errorHandler'

const ROOT_URL = process.env.REACT_APP_ROOT_HOST

const multicastAPI = {
  getMulticast: async () => {
    try {
      return await axios.post(`${ROOT_URL}`, {
        "path" : "/PupServer",
        "cmd" : "getPupMulticast"
      })
    } catch (err: any) {
      return errorHandler(err)
    }
  }
}

export default multicastAPI