import { DeleteOutlined, LoadingOutlined, WifiOutlined } from '@ant-design/icons'
import { Empty, Card, Modal } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import style from './items.module.css'
import { PUP, PUPsType, PUPsDataType } from '../../interfaces/pupsInterfaces';

type PUPsItemsProps = {
  PUPsItems: PUPsDataType[],
  deletePUP: Function
}

const PUPsItems: React.FC<PUPsItemsProps> = ({PUPsItems, deletePUP}) => {
  return (
    <div className={style.PUPsItems}>{
      ! PUPsItems
      ? <Empty/>
       : <>{ PUPsItems.map((PUP: PUPsDataType) => {
         if (PUP.pupType?.DevId) {
           return <Item title={PUP.pupType.Type} key={PUP.ip+ PUP.port} pup={PUP} deletePUP={deletePUP}/>
         }
         return <EmptyItem/>
       })}</>
    }</div>
  )
}

const Item = (props: {title: string, pup: PUPsDataType, deletePUP: Function})  => {
  const { title, pup } = props
  return (
    <Card className={style.item}>
      <Meta title={<TitleRow title={title}/>} description={<MetaDescription deletePUP={props.deletePUP} ip={pup.ip} port={pup.port}/>}/>
    </Card>
  )
}

const EmptyItem = ()  => {
  return (
    <Card className={style.item}>
      <Meta title={<TitleRow title={'Отсутствует тип'}/>}/>
    </Card>
  )
}

const TitleRowActive = (props: {title: string}) => {
  return (
    <div className={style.titleRow}>
      <>{props.title}</>
      <WifiOutlined className={style.activeWiFiIcon}/>
    </div>
  )
}


const TitleRow = (props: {title: string}) => {
  return (
    <div className={style.titleRow}>
      <>{props.title}</>
      <div>
        <LoadingOutlined style={{marginRight: '15px'}}/>
        <WifiOutlined/>
      </div>
    </div>
  )
}

const MetaDescription = (props: { ip: string, port: number, deletePUP: Function}) => {
  const openModal = () => {
    
  }
  return (
    <>
      <p>{`${props.ip}:${props.port}`}</p>
      <div style={{display: 'flex', flexGrow: 1, justifyContent: 'space-between'}}>
        <p>КСМСИ(2) (50.12.432.123.432.34)</p>
        <DeleteOutlined onClick={() => props.deletePUP(props.ip, props.port)}/>
      </div>
    </>
  )
}


const warning = () => {
  Modal.warning({
    title="Добавить ПУП",
    visible={visible}
    onCancel={() => onClose()}
    footer={<></>}
  });
}
export default PUPsItems