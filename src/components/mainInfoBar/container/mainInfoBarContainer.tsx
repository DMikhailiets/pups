import React from 'react'
import { useSelector } from 'react-redux'
import { fetchActivePUP } from '../../../redux/selectors/PUPsSelector'
import MainInfoBar from '../component/mainInfoBar'

const MainInfoBarContainer = () => {
    const activePUP = useSelector(fetchActivePUP)
    return <MainInfoBar activePUP={activePUP}/>
}

export default MainInfoBarContainer