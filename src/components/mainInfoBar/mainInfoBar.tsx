import React from 'react'
import { CheckOutlined, EditOutlined, FireOutlined, LoadingOutlined, WifiOutlined } from '@ant-design/icons'
import { Card, Switch } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from './mainInfoBar.module.css'
import { Device } from '..'

const MainInfoBar = () => {
    return (
        <div className={styles.wrapper}>
            <Card >
                <Meta title={<TitleRowActive title={'title'}/>} description={<DescriptionRow/>}/>
            </Card>
            <div className={styles.mainInfoRow}>
                <Card className={styles.mainInfoRowItem}>
                    <Meta title={
                        <div className={styles.titleRow}>
                            <span>Плаа ЦОС</span>
                            <div><FireOutlined />{'61°С'}</div>
                        </div>
                    }/>
                </Card>
            <Card className={styles.mainInfoRowItem}>
                <Meta title={
                        <div className={styles.titleRow}>
                            <span>Опорный генератор</span>
                            <div><FireOutlined />{'61°С'}</div>
                        </div>
                    }/>
            </Card>
            <Card className={styles.mainInfoRowItem}>
                <Meta title={
                    <div className={styles.titleRow}>
                        <span>ЛНС</span>
                        <div><FireOutlined />{'61°С'}</div>
                    </div>
                }/>
            </Card>
            </div>
            <Device/>
        </div>
    )
}

const TitleRowActive = (props: {title: string}) => {
    return (
        <div className={styles.titleRow}>
        <>{props.title}</>
        <CheckOutlined className={styles.activeWiFiIcon}/>
        </div>
    )
}


const TitleRow = (props: {title: string}) => {
    return (
        <div className={styles.titleRow}>
        <>{props.title} <EditOutlined /></>
        <div>
            <LoadingOutlined style={{marginRight: '15px'}}/>
            <WifiOutlined/>
        </div>
        </div>
    )
}

const DescriptionRow = () => {
    return (
        <>
            <div>
                <div className={styles.descriptionRow}>
                    <div className={styles.descriptionRowBlock} style={{minWidth: '150px'}}>
                        <div>Бочка ртр <EditOutlined /></div>
                        <div>192.0.0.44:2222 <EditOutlined /></div>
                    </div>
                    <div className={styles.descriptionRowBlock}>
                        <div>Подключено <CheckOutlined className={styles.activeWiFiIcon}/></div>
                        <div>Ошибок нет <CheckOutlined className={styles.activeWiFiIcon}/></div>
                    </div>
                    <div>
                        <div>Обновлено:</div>
                        <div>1ч 23мин назад:</div>
                    </div>
                    <div className={styles.descriptionRowBlock}>
                        <span>Режим: <Switch checked={false} /></span>
                        <span>Режим: <Switch checked={false} /></span>
                    </div>
                </div>
                <div className={styles.titleRow}>
                <div>
                    <span>Vбп: 444.44В Vvx: 9.02В</span>
                </div>
                <span>Версия: 1.01</span>
                </div>  
            </div>
        </>
    )

}
export default MainInfoBar