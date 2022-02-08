import { AppState } from './../store';
import { createSelector } from 'reselect'

const getData = (state: AppState) => {
  return state.PUPsReducer.pups
}

export const fetchData = createSelector(getData, (data) => {
  return data
})