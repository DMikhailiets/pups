import { setPUPs, setPUPsTypes } from '../actions.ts'
import { Dispatch } from 'redux'
import { setPUPsActionType, setPUPsTypesActionType } from '../actions.ts/pupsReducerActions'
import pupsAPI from '../../API/pupsAPI'

export const getPUPs = () => async (dispatch: Dispatch<setPUPsActionType>) => {
  try {
    let response = await pupsAPI.getPUPs()
    if (response && response.data) {
        dispatch(setPUPs(response.data))
    }
  } catch (err) {
    console.error(err)}
}

export const getPUPsTypes = () => async (dispatch: Dispatch<setPUPsTypesActionType>) => {
  try {
    let response = await pupsAPI.getPUPsTypes()
    if (response && response.data) {
        dispatch(setPUPsTypes(response.data))
    }
  } catch (err) {
    console.error(err)}
}