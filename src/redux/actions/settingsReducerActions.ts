export interface setSettingsActionType {
  type: string, 
  payload?: any
}

export type settingsReducerActionsType = setSettingsActionType

export enum actionsTypes {
  SET_SETTINGS = 'SET_SETTINGS'
}

export const setSettings: (payload: any) => setSettingsActionType = (payload: any) => {
  return ({type: actionsTypes.SET_SETTINGS, payload})
}