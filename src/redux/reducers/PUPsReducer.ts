import { PUP, PUPsType } from '../../interfaces/pupsInterfaces'
import { actionsTypes, pupsReducerActionTypes } from '../actions/pupsReducerActions'

interface stateInterface {
  pups: PUP[] | null
  pupsTypes: PUPsType[] | null
  isLoading: boolean
}
const initialState: stateInterface = {
  pups: null,
  pupsTypes: null,
  isLoading: false
}

export let PUPsReducer = (state = initialState, action: pupsReducerActionTypes): stateInterface => {
  switch (action.type){
    case actionsTypes.SET_PUPS: {
      return {
        ...state, pups: action.payload
      }
    }
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
    default: 
      return state
  }
} 

export default PUPsReducer