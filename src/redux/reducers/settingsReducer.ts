import { actionsTypes, settingsReducerActionsType } from '../actions.ts/settingsReducerActions'

interface stateInterface {
  darkTheme: boolean
}
const initialState: stateInterface = {
  darkTheme: false
}

export let settingsReducer = (state = initialState, action: settingsReducerActionsType): stateInterface => {
  switch (action.type){
    case actionsTypes.SET_SETTINGS: {
      return {
        ...state, darkTheme: action.payload
      }
    }
    default: 
      return state
  }
} 

export default settingsReducer