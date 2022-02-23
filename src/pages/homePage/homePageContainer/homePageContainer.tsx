import React, { useEffect } from 'react'
import HomePageComponent from '../homePageComponent/homePageComponent'
import { useSelector, useDispatch } from 'react-redux'
import { deletePUP, getPUPsTypes } from '../../../redux/asyncActions/PUPsReducerAsyncActions'
import { fetchPUPsData, fetchMulticastData, fetchIsLoading } from '../../../redux/selectors'
import { getPUPs } from '../../../redux/asyncActions'
import { getPUPsAgain } from '../../../redux/asyncActions/PUPsReducerAsyncActions'
import { LoadingOutlined } from '@ant-design/icons'
import { getMulticast } from '../../../redux/asyncActions/MulticastReducerAsyncActions'
import { fetchActivePUP } from '../../../redux/selectors/PUPsSelector'
import { setActivePUP } from '../../../redux/actions/pupsReducerActions'
import { PUPsDataType, PUPWithTelemetry } from '../../../interfaces/pupsInterfaces'

const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch()
  const PUPsData = useSelector(fetchPUPsData)
  const multicast = useSelector(fetchMulticastData)
  const isPUPsLoading = useSelector(fetchIsLoading)
  const activePUP = useSelector(fetchActivePUP)

  useEffect(() => {
    if (!PUPsData) {
      dispatch(getPUPs())
      dispatch(getPUPsTypes())
      dispatch(getMulticast())
    }
  },[])
  if (PUPsData !== undefined) {
    return <HomePageComponent 
      PUPsData={PUPsData} 
      multicast={multicast} 
      deletePUP={(pup: {ip: string, port: number}) => {
        dispatch(deletePUP(pup))
        dispatch(getPUPsAgain())
      } }
      getPUPs={() => dispatch(getPUPsAgain())}
      isPUPsLoading={isPUPsLoading}
      setActivePUP={(PUP: PUPsDataType) => {debugger ;dispatch(setActivePUP(PUP))}}
      activePUP={activePUP}
    />
  }
  return <LoadingOutlined/>
}

export default HomePageContainer