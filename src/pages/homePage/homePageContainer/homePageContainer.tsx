import React, { useEffect } from 'react'
import HomePageComponent from '../homePageComponent/homePageComponent'
import { useSelector, useDispatch } from 'react-redux'
import { getPUPsTypes } from '../../../redux/asyncActions.ts/PUPsReducerAsyncActions'
import { fetchPUPsData } from '../../../redux/selectors/PUPsSelector'
import { getPUPs } from '../../../redux/asyncActions.ts'
import { LoadingOutlined } from '@ant-design/icons'

const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch()
  const PUPsData = useSelector(fetchPUPsData)

  useEffect(() => {
    if (!PUPsData) {
      dispatch(getPUPs())
      dispatch(getPUPsTypes())
    }
  },[])
  if (PUPsData) {
    return <HomePageComponent PUPsData={PUPsData}/>
  }
  return <LoadingOutlined/>
}

export default HomePageContainer