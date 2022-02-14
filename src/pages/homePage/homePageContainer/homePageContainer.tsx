import React, { useEffect } from 'react'
import HomePageComponent from '../homePageComponent/homePageComponent'
import { useSelector, useDispatch } from 'react-redux'
import { deletePUP, getPUPsTypes } from '../../../redux/asyncActions/PUPsReducerAsyncActions'
import { fetchPUPsData, fetchMulticastData } from '../../../redux/selectors'
import { getPUPs } from '../../../redux/asyncActions'
import { LoadingOutlined } from '@ant-design/icons'
import { getMulticast } from '../../../redux/asyncActions/MulticastReducerAsyncActions'

const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch()
  const PUPsData = useSelector(fetchPUPsData)
  const multicast = useSelector(fetchMulticastData)

  useEffect(() => {
    if (!PUPsData) {
      dispatch(getPUPs())
      dispatch(getPUPsTypes())
      dispatch(getMulticast())
    }
  },[])
  if (PUPsData !== undefined) {
    return <HomePageComponent PUPsData={PUPsData} multicast={multicast} deletePUP={(pup: {ip: string, port: number}) => {dispatch(deletePUP(pup))} }/>
  }
  return <LoadingOutlined/>
}

export default HomePageContainer