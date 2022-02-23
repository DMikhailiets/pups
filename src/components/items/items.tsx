import React, { useEffect, useState } from 'react'
import { DeleteOutlined, LoadingOutlined, WifiOutlined } from '@ant-design/icons'
import { Empty, Card, Modal } from 'antd'
import Meta from 'antd/lib/card/Meta'
import style from './items.module.css'
import { PUP, PUPsType, PUPsDataType, PUPWithTelemetry } from '../../interfaces/pupsInterfaces';

type PUPsItemsProps = {
  PUPsItems: PUPWithTelemetry[],
  deletePUP: Function,
  getPUPs: () => void,
  setActivePUP: (PUP: PUPsDataType) => void,
  activePUP: PUPsDataType | null
}

const PUPsItems: React.FC<PUPsItemsProps> = ({ PUPsItems, deletePUP, getPUPs, setActivePUP, activePUP }) => {
  return (
    <div className={style.PUPsItems}>{
      !PUPsItems
        ? <Empty />
        : <>{PUPsItems.map((PUP: PUPsDataType) => {
          if (PUP.pupType?.DevId) {
            return <Item 
              title={PUP.pupType.Type} 
              key={PUP.ip + PUP.port} 
              pup={PUP} 
              deletePUP={deletePUP} 
              setActivePUP={setActivePUP}
              activePUP={activePUP}
            />
          }
          return <EmptyItem />
        })}</>
    }</div>
  )
}

const Item = (props: { 
    title: string, 
    pup: PUPsDataType, 
    deletePUP: Function, 
    setActivePUP: (PUP: PUPWithTelemetry) => void 
    activePUP: PUPsDataType | null
  }) => {
  const { title, pup } = props
  const isActiveItem = props.pup.ip === props.activePUP?.ip && props.pup.port === props.activePUP?.port
  return (
    <div className={isActiveItem ? style.activeItem : ''} onClick={() => {console.log('first'); props.setActivePUP(pup) }}>
      <Card bordered={true} className={style.item }>
      <Meta title={<TitleRow title={title} />} description={<MetaDescription deletePUP={props.deletePUP} ip={pup.ip} port={pup.port} />} />
    </Card>
    </div>
  )
}

const EmptyItem = () => {
  return (
    <Card className={style.item}>
      <Meta title={<TitleRow title={'Отсутствует тип'} />} />
    </Card>
  )
}

const TitleRowActive = (props: { title: string }) => {
  return (
    <div className={style.titleRow}>
      <>{props.title}</>
      <WifiOutlined className={style.activeWiFiIcon} />
    </div>
  )
}


const TitleRow = (props: { title: string }) => {
  return (
    <div className={style.titleRow}>
      <>{props.title}</>
      <div>
        <LoadingOutlined style={{ marginRight: '15px' }} />
        <WifiOutlined />
      </div>
    </div>
  )
}

const MetaDescription = (props: { ip: string, port: number, deletePUP: Function }) => {
  const { ip, port, deletePUP } = props
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <p>{`${props.ip}:${props.port}`}</p>
      <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
        <p>КСМСИ(2) (50.12.432.123.432.34)</p>
        <DeleteOutlined onClick={() => setIsOpened(true)} />
        <Modal title="Basic Modal" visible={isOpened} onOk={() => { deletePUP({ ip, port }); setIsOpened(false) }} onCancel={() => setIsOpened(false)}>
          <p>Действительно хотите удалить этот элемент?</p>
        </Modal>
      </div>

    </>
  )
}

export default PUPsItems