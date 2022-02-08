import { AppState } from '../store';
import { createSelector } from 'reselect'

const getSettingsData = (state: AppState) => {
  return state.settingsReducer
}

export const fetchSettingsData = createSelector(getSettingsData, (data) => {
  return data
})