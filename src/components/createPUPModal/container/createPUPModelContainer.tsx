import React, { useEffect } from 'react'
import PUPModal from '../component/createPUPModal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPUPsTypes, fetchIsLoading } from '../../../redux/selectors/PUPsSelector'
import { addNewPUP, getPUPsAgain } from '../../../redux/asyncActions/PUPsReducerAsyncActions'
import { PUPsType } from '../../../interfaces/pupsInterfaces'

interface reatePUPModalContainerType {
    visible: boolean,
    onClose: Function,
}


const CreatePUPModalContainerContainer: React.FC<reatePUPModalContainerType> = ({visible, onClose}) => {
  const dispatch = useDispatch()
  const pupsTypes = useSelector(fetchPUPsTypes)
  const isLoading = useSelector(fetchIsLoading)
  return <PUPModal 
    visible={visible} 
    onClose={onClose} 
    isLoading={isLoading} 
    pupsTypes={pupsTypes} 
    addNewPUP={(pup: {ip: string, port: number, DevId: string }) => dispatch(addNewPUP(pup))}
    getPUPs={() => dispatch(getPUPsAgain())}
  />
}

export default CreatePUPModalContainerContainer
