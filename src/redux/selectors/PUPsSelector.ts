import { AppState } from '../store';
import { createSelector } from 'reselect'
import { PUP, PUPsType } from '../../interfaces/pupsInterfaces';


const getPUPsData = (state: AppState) => {
  return state.PUPsReducer
}

export const fetchPUPsData = createSelector(getPUPsData, data => {
  const {pupsTypes, pups} = data
  if (pupsTypes) {
    return pups?.map((pup: PUP) => ({
      ...pup,
      pupType: 
        pupsTypes?.find((pupsType: PUPsType) => pupsType.DevId ===  pup.DevId)
    
    }))
  }
})

export const fetchIsLoading = createSelector(getPUPsData, data => {
 return data.isLoading
})

export const fetchPUPsTypes = createSelector(getPUPsData, data => {
  return data.pupsTypes
 })