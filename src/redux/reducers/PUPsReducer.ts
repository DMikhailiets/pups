import { PUP, PUPsType, PUPWithTelemetry } from '../../interfaces/pupsInterfaces'
import { actionsTypes, pupsReducerActionTypes } from '../actions/pupsReducerActions'

interface stateInterface {
  pups: PUPWithTelemetry[] | null
  pupsTypes: PUPsType[] | null
  isLoading: boolean
  activePUP: PUPWithTelemetry | null
}
const initialState: stateInterface = {
  pups: null,
  pupsTypes: null,
  isLoading: false,
  activePUP: null
}

export let PUPsReducer = (state = initialState, action: pupsReducerActionTypes): stateInterface => {
  debugger
  switch (action.type){
    // case actionsTypes.SET_PUPS: {
    //   return {
    //     ...state, pups: action.payload
    //   }
    // }
    case actionsTypes.SET_PUPS_TYPES: {
      return {
        ...state, pupsTypes: [...action.payload]
      }
    }
    case actionsTypes.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case actionsTypes.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case actionsTypes.SET_PUPS_WITH_TELEMETRY: {
      return {
        ...state,
        pups: action.payload
      }
    }
    case actionsTypes.SET_ACTIVE_PUP: {
      debugger
      return {
        ...state,
        activePUP: action.payload
      }
    }
    default: 
      return state
  }
} 

export default PUPsReducer