import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React from 'react'
import { PUPsType } from '../../../interfaces/pupsInterfaces'

const { Option } = Select;

type ModalProps = {
  visible: boolean
  isLoading: boolean
  onClose: Function
  pupsTypes: PUPsType[] | null
  addNewPUP: Function
  // messageText: string
}

const CreateNewPUPModal: React.FC<ModalProps> = ({ visible, onClose, addNewPUP, isLoading, pupsTypes }) => {
  return <Modal
    title="Добавить ПУП"
    visible={visible}
    onCancel={() => onClose()}
    footer={<></>}
  ><Form
    autoComplete="off"
    onFinish={(pup) => {
      addNewPUP(pup)
      onClose()
    }}
  >
      <Form.Item
        name="ip"
        rules={[
          {
            required: true,
            message: 'Введите IP',

          },
          () => ({
            validator(rule, value) {
              if (!value || /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject('Введите крректный IP');
            },
          })
        ]}
        hasFeedback>
        <Input allowClear={true} placeholder='IP' />
      </Form.Item>
      <Form.Item
        id="Порт"
        name={["port"]}

        rules={[{
          required: true,
          message: 'Введите порт'
        },
        () => ({
          validator(rule, value) {
            if (value.length < 5) {
              return Promise.resolve();
            }
            return Promise.reject('Некорректное значение');
          },
        }),
        () => ({
          validator(rule, value) {
            if (/^\d+$/.test(value)) {
              return Promise.resolve();
            }
            return Promise.reject();
          },
        })]}
        hasFeedback>

        <Input
          allowClear={true}
          placeholder='Порт'
        />
      </Form.Item>
      <Form.Item
        id="DevId"
        name={["DevId"]}
        rules={[{
          required: true,
          message: 'Выберите DevId'
        }]}>
        <Select placeholder='Dev id' >
          {
            pupsTypes?.map(type => {
              return  <Option key={type.DevId} value={type.DevId}>{`${type.Type} ${type.Version} dev id: ${type.DevId}`}</Option>
            })
          }
        </Select>
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} htmlType="submit" style={{ marginTop: '15px', width: '100%' }} type='primary' size='large'> Добавить </Button>
      </Form.Item>
    </Form>
  </Modal >
}

export default CreateNewPUPModal