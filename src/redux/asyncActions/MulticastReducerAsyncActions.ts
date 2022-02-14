import { Dispatch } from 'redux'
import { multicastAPI } from '../../API'
import { setMulticast, setMulticastTypesActionType } from '../actions/multicastReducerActions'

export const getMulticast = () => async (dispatch: Dispatch<setMulticastTypesActionType>) => {
  try {
      const response = await multicastAPI.getMulticast()
      if (response && response.data) {
        dispatch(setMulticast(response.data))
    }
  } catch (err) {
    console.error(err)}
}
