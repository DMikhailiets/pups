import { Multicast } from '../../interfaces/multicastInterfaces'
import { actionsTypes, multicastReducerActionTypes } from '../actions/multicastReducerActions'

interface stateInterface {
  multicast: Multicast[] | null

}
const initialState: stateInterface = {
  multicast: null
}

export let multicastReducer = (state = initialState, action: multicastReducerActionTypes): stateInterface => {
  switch (action.type){
    case actionsTypes.SET_MULTICAST: {
      return {
        ...state,
        multicast: [...action.payload]
      }
    }
    default: 
      return state
  }
} 

export default multicastReducer