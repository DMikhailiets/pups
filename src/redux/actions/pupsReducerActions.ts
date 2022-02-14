import { PUP, PUPsResponse, PUPsTypesResponse, PUPsType } from '../../interfaces/pupsInterfaces'

export interface setPUPsActionType {
  type: string, 
  payload: PUP[]
}

export interface setPUPsTypesActionType {
  type: string, 
  payload: any//PUPsType[]
}
export interface setPUPsTypesActionType {
  type: string, 
  payload: any//PUPsType[]
}

export type pupsReducerActionTypes = setPUPsActionType | setPUPsTypesActionType

export enum actionsTypes {
  SET_PUPS = 'SET_PUPS',
  SET_PUPS_TYPES = 'SET_PUPS_TYPES',
  SET_IS_LOADING = 'SET_IS_LOADING'
}

export const setPUPs: (payload: PUPsResponse) => setPUPsActionType = (payload: PUPsResponse) => {
  return ({type: actionsTypes.SET_PUPS, payload: payload.pups})
}

export const setPUPsTypes: (payload: PUPsTypesResponse) => setPUPsTypesActionType = (payload: PUPsTypesResponse) => {
  return ({type: actionsTypes.SET_PUPS_TYPES, payload: payload.pupTypes})
}

export const setIsLoading: (payload: boolean) => setPUPsTypesActionType = (payload: boolean) => {
  return ({type: actionsTypes.SET_IS_LOADING, payload: payload})
}