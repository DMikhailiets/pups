import { AppState } from '../store';
import { createSelector } from 'reselect'

const getMulticastData = (state: AppState) => {
  return state.multicastReducer.multicast
}

export const fetchMulticastData = createSelector(getMulticastData, data => {
  return data
})
