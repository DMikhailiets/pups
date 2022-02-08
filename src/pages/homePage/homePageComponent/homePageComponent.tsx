import { LoadingOutlined } from '@ant-design/icons';
import { Card, Col, Empty, Row } from 'antd'
import Layout from 'antd/lib/layout'
import React from 'react'
import { Items, MulticastTable, SearchRow, MainInfoBar } from '../../../components'
import { PUPsDataType } from '../../../interfaces/pupsInterfaces';

const { Content } = Layout;


type HomePageComponentProps = {
  PUPsData: PUPsDataType[],
}

const HomePageComponent: React.FC<HomePageComponentProps> = ({ PUPsData = null }) => {
  console.log(PUPsData);
  return (
    <Row>
      <Col span={5}>
        <Card title={<SearchRow />} style={{ width: "100%", minHeight: "94vh", maxHeight: '94vh' }}>
          <Content style={{ height: '100%' }}>
            <>
              {
                !PUPsData
                ? <LoadingOutlined/>
                :<>
                {
                  PUPsData.length === 0
                    ? <Empty />
                    : <Items PUPsItems={PUPsData} />
                }
              </>
              }
            </>
          </Content>
        </Card>
      </Col>
      <Col span={11}>
        <MainInfoBar />
      </Col>
      <Col span={8}>
        <Card title="Таблица мультикаста" style={{ width: "100%", minHeight: "94vh", maxHeight: '94vh' }}>
          <Content>
            <MulticastTable />
          </Content>
        </Card>
      </Col>
    </Row>
  )
}

export default HomePageComponent