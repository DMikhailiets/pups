import { setPUPs, setPUPsTypes } from '../actions'
import { Dispatch } from 'redux'
import { setIsLoading, setPUPsActionType, setPUPsTypesActionType } from '../actions/pupsReducerActions'
import pupsAPI from '../../API/pupsAPI'
import { Notification } from '../../components'
import { notificationTypes } from '../../components/notification/notification'

export const getPUPs = () => async (dispatch: Dispatch<setPUPsActionType>) => {
  try {
    const response = await pupsAPI.getPUPs()
    if (response && response.data) {
      dispatch(setPUPs(response.data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const getPUPsTypes = () => async (dispatch: Dispatch<setPUPsTypesActionType>) => {
  try {
    let response = await pupsAPI.getPUPsTypes()
    if (response && response.data) {
      dispatch(setPUPsTypes(response.data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addNewPUP = (pup: any) => async (dispatch: Dispatch<setPUPsTypesActionType>) => {
  try {
    const {ip, port, DevId} = pup
    dispatch(setIsLoading(true))
    let response = await pupsAPI.addNewPup(ip, port, DevId)
    if (response && response.data) {
      dispatch(setPUPsTypes(response.data))
      return Notification({
        text: "Добавлена новая ПУП",
        type: notificationTypes.SUCCESS,
        title: `
        DevID: ${DevId}
        IP: ${ip}
        Port: ${port}`
      })
    }
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const deletePUP = (pup: any) => async (dispatch: Dispatch) => {
  try {
    const {ip, port, DevId} = pup
    dispatch(setIsLoading(true))
    let response = await pupsAPI.deletePup(ip, port)
    if (response && response.data) {
      dispatch(setPUPsTypes(response.data))
    }
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(setIsLoading(false))
  }
}