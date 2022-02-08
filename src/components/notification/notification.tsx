import React from "react"
import { notification } from "antd"

type notificationProps = {
  text?: string,
  type?: string,
  title?: string,
  duration?: number,
}

export enum notificationTypes {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

const Notification: (props: notificationProps) => void = ({ text = '', type = "info", title = '', duration = 3 }) => {
  switch (type) {
    case notificationTypes.SUCCESS: return notification[type]({
      message: title,
      description: text,
      duration: duration,
    })
    case notificationTypes.ERROR: return notification[type]({
      message: title,
      description: text,
      duration: duration,
    })
    case notificationTypes.INFO: return notification[type]({
      message: title,
      description: text,
      duration: duration,
    })
    default: return
  }
}


type b = {text: string}
let a: (name: b) => string = ({text}) => text

export default Notification