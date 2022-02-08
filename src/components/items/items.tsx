import { LoadingOutlined, WifiOutlined } from '@ant-design/icons'
import { Empty, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import style from './items.module.css'
import { PUP, PUPsType, PUPsDataType } from '../../interfaces/pupsInterfaces';

type PUPsItemsProps = {
  PUPsItems: PUPsDataType[]
}

const PUPsItems: React.FC<PUPsItemsProps> = ({PUPsItems}) => {
  return (
    <div className={style.PUPsItems}>{
      ! PUPsItems
      ? <Empty/>
       : <>{ PUPsItems.map((PUP: PUPsDataType) => {
         if (PUP.pupType?.DevId) {
           return <Item title={PUP.pupType.Type} key={PUP.DevId} pup={PUP}/>
         }
         return <EmptyItem/>
       })}</>
    }</div>
  )
}

const Item = (props: {title: string, pup: PUPsDataType})  => {
  const { title, pup } = props
  return (
    <Card className={style.item}>
      <Meta title={<TitleRow title={title}/>} description={<MetaDescription ip={pup.ip} port={pup.port}/>}/>
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

const MetaDescription = (props: { ip: string, port: number}) => {
  return (
    <>
      <p>{`${props.ip}:${props.port}`}</p>
      <div>
        <p>КСМСИ(2) (50.12.432.123.432.34)</p>
      </div>
    </>
  )
}

export default PUPsItems