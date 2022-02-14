import { LoadingOutlined } from '@ant-design/icons';
import { Empty, Table } from 'antd';
import React from 'react'
import { Multicast } from '../../interfaces/multicastInterfaces'

type MulticastTableProps = {
  multicast: Multicast[] | null
}
const MulticastTable: React.FC<MulticastTableProps> = ({multicast}) => {
 return (
   <>
    {
      multicast === null 
      ? <LoadingOutlined/>
      : <>
      {
        multicast.length
        ? <Table size='small' style={{height: '10vh'}}columns={columns} dataSource={multicast} />
        : <Empty/>
      }
      </>
    }
   </>
 ) 
}

const columns = [
  {
    title: 'devIdOrigin',
    dataIndex: 'devIdOrigin',
    key: 'ip',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'ip',
  },
  {
    title: 'MAC',
    dataIndex: 'mac',
    key: 'mac',
  },
  {
    title: 'Порт',
    dataIndex: 'port',
    key: 'ip',
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'ip',
  },
]


export default MulticastTable