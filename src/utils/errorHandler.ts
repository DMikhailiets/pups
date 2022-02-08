import { notificationTypes } from './../components/notification/notification';
import { Notification } from "../components"
import axios, { AxiosError } from 'axios'


const errorHandler: (err: AxiosError | Error) => void = (err) => {
  if (axios.isAxiosError(err)) {
    if (err.response) {
      return Notification({
        text: err.response.data.error,
        type: notificationTypes.ERROR,
        title: "Access denied or internal service error was received"
      })
    }
    return Notification({
      text: 'Network error',
      type: notificationTypes.ERROR,
      title: "Incorrect response"
    })
  }
  else {
    console.error(err)
    return Notification({
      text: 'Something went wrong',
      type: notificationTypes.ERROR,
      title: "Oops..."
    })
  }
}

export default errorHandler