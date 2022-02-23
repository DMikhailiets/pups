import { PUP, PUPsResponse, PUPsTypesResponse, PUPsType, PUPWithTelemetry, PUPsDataType } from '../../interfaces/pupsInterfaces'

export interface setPUPsActionType {
  type: actionsTypes.SET_PUPS, 
  payload: PUP[]
}

export interface setPUPsTypesActionType {
  type: actionsTypes.SET_PUPS_TYPES, 
  payload: PUPsType[]
}
export interface setPUPsWithTelemetryActionType {
  type: actionsTypes.SET_PUPS_WITH_TELEMETRY, 
  payload: Array<PUPWithTelemetry>
}

export interface setIsLoadingActionType {
  type: actionsTypes.SET_IS_LOADING, 
  payload: boolean
}

export interface setActivePUPActionType {
  type: actionsTypes.SET_ACTIVE_PUP,
  payload: PUPsDataType
}

export type pupsReducerActionTypes = setPUPsActionType | setPUPsTypesActionType | setIsLoadingActionType | setPUPsWithTelemetryActionType | setActivePUPActionType

export enum actionsTypes {
  SET_PUPS = 'SET_PUPS',
  SET_PUPS_TYPES = 'SET_PUPS_TYPES',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_PUPS_WITH_TELEMETRY = 'SET_PUPS_WITH_TELEMETRY',
  SET_ACTIVE_PUP = 'SET_ACTIVE_PUP'
}

export const setPUPs: (payload: PUPsResponse) => setPUPsActionType = (payload: PUPsResponse) => {
  return ({type: actionsTypes.SET_PUPS, payload: payload.pups})
}

export const setPUPsWithTelemetry: (payload: Array<PUPWithTelemetry>) => setPUPsWithTelemetryActionType = (payload: Array<PUPWithTelemetry>) => {
  return ({type: actionsTypes.SET_PUPS_WITH_TELEMETRY, payload: [...payload]})
}

export const setPUPsTypes: (payload: PUPsTypesResponse) => setPUPsTypesActionType = (payload: PUPsTypesResponse) => {
  return ({type: actionsTypes.SET_PUPS_TYPES, payload: payload.pupTypes})
}

export const setIsLoading: (payload: boolean) => setIsLoadingActionType = (payload: boolean) => {
  return ({type: actionsTypes.SET_IS_LOADING, payload})
}

export const setActivePUP: (payload: PUPsDataType) => setActivePUPActionType = (payload: PUPsDataType) => {
  debugger
  return ({type: actionsTypes.SET_ACTIVE_PUP, payload})
}
