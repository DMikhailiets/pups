import { LoadingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Empty, Row } from 'antd'
import Layout from 'antd/lib/layout'
import React, { useState } from 'react'
import { Items, MulticastTable, SearchRow, MainInfoBar, CreateNewPUPModal } from '../../../components'
import { Multicast } from '../../../interfaces/multicastInterfaces';
import { PUPsDataType, PUPsType } from '../../../interfaces/pupsInterfaces';
import styles from './homePageComponent.module.css'


const { Content } = Layout;


type HomePageComponentProps = {
  PUPsData: PUPsDataType[] | null,
  multicast: Multicast[] | null,
  deletePUP: Function
}

const HomePageComponent: React.FC<HomePageComponentProps> = ({ PUPsData = null, multicast, deletePUP }) => {
  const [visible, setVisible] = useState(false)

  return (
    <Row>
      <Col span={5}>
        <Card title={<SearchRow />} style={{ width: "100%", minHeight: "94vh", maxHeight: '94vh' }}>
          <Content className={styles.pupsColumn} style={{ height: '100%' }}>
            <>
              {
                !PUPsData
                ? <LoadingOutlined/>
                :<>
                {
                  PUPsData.length === 0
                    ? <Empty />
                    : <Items PUPsItems={PUPsData} deletePUP={deletePUP}/>
                }
              </>
              }
            </>
            <Button style={{marginTop: '15px'}} onClick={() => setVisible(true)}>+</Button>
            <CreateNewPUPModal visible={visible} onClose={() => setVisible(false)}/>
          </Content>
        </Card>
      </Col>
      <Col span={11}>
        <MainInfoBar />
      </Col>
      <Col span={8}>
        <Card title="Таблица мультикаста" style={{ width: "100%", minHeight: "94vh", maxHeight: '94vh' }}>
          <Content>
            <MulticastTable multicast={multicast}/>
          </Content>
        </Card>
      </Col>
    </Row>
  )
}

export default HomePageComponent