import { CheckOutlined, EditOutlined, LoadingOutlined, WifiOutlined } from '@ant-design/icons';
import { Card, Switch } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import styles from './device.module.css'
import { Typography } from 'antd';

const { Title } = Typography;

const Device = () => {
    return (
    <Card >
        <Meta title={<TitleRow title={'title'}/>} description={<DescriptionRow/>}/>
    </Card>
    )
}

const TitleRow = (props: {title: string}) => {
    return (
        <div className={styles.titleRow}>
            <>{props.title}</>
            <Switch checked={true}/>
        </div>
    )
}

const DescriptionRow = () => {
    return (
        <div className={styles.descriptionRowWrapper}>
            <div className={styles.measurementsWrapper}>
                <div className={styles.valuesWrapper}>
                    <Title >V</Title>
                    <div className={styles.values}>
                        <span>напряжение</span>
                        <span>5.444В</span>
                    </div>
                </div>
                <div className={styles.valuesWrapper}>
                    <Title >A</Title>
                    <div className={styles.values}>
                        <span>сила тока</span>
                        <span>5.444А</span>
                    </div>
                </div>
                <div></div>
            </div>
            <div>
                <div className={styles.switches}>
                    <span>Режим: </span>
                    <Switch checked={false} />
                </div>
                <div>
                    <span>Watchdog: </span>
                    <Switch checked={false} />
                </div>
            </div>
        </div>
    )

}

export default Device