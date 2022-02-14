import { MulticastResponse } from '../../interfaces/multicastInterfaces'

export enum actionsTypes {
  SET_MULTICAST = 'SET_MULTICAST'
}

export interface setMulticastTypesActionType {
  type: string, 
  payload: any//PUPsType[]
}

export type multicastReducerActionTypes = setMulticastTypesActionType

export const setMulticast = (payload: MulticastResponse) => {
  return ({type: actionsTypes.SET_MULTICAST, payload: payload.pupMulticast})
}
