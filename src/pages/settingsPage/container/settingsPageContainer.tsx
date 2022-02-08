import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSettings } from '../../../redux/actions.ts'
import { fetchSettingsData } from '../../../redux/selectors'
import SettingsPageComponent from '../component/settingsPageComponent'

const SettingsPageContainer = () => {
    const dispatch = useDispatch()
    const settings = useSelector(fetchSettingsData)
    return <SettingsPageComponent setSettings={(value: any) => dispatch(setSettings(value))} settings={settings}/>
}

export default SettingsPageContainer