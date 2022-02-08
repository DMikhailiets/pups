import { PUP, PUPsType } from '../../interfaces/pupsInterfaces'
import { actionsTypes, pupsReducerActionTypes } from '../actions.ts/pupsReducerActions'

interface stateInterface {
  pups: PUP[] | null
  pupsTypes: PUPsType[] | null

}
const initialState: stateInterface = {
  pups: null,
  pupsTypes: null
}

export let simpleReducer = (state = initialState, action: pupsReducerActionTypes): stateInterface => {
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
    default: 
      return state
  }
} 

export default simpleReducer