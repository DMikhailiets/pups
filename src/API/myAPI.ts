import axios from 'axios'
import errorHandler from '../utils/errorHandler'

const myApi = {
  getData: async (): Promise<any> => {
  //   try {
  //     return await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=21')
  //   } catch (err: any) {
  //     return errorHandler(err)
  //   }
  }
}

export default myApi