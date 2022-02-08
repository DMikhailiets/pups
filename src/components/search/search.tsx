import React, { useRef, useState } from 'react'
import { SettingOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import style from './style.module.css'


const SearchRow = () => {

    const [isOnHoverColor, setIsOnHoverColor] = useState(false)
    const [isOnHoverSettings, setIsOnHoverSettings] = useState(false)
    const [isOnHoverFilter, setIsOnHoverFilter] = useState(false)

    const onClick = (value: any) => {
        console.log(value, input)
    } 


    const input = useRef(null)

    return (
        <div className={style.wrapper}>
            {
                <>
                    {
                        isOnHoverSettings
                    ? <SettingOutlined className={style.icon} onMouseLeave={() => setIsOnHoverSettings(false)} onMouseEnter={() => setIsOnHoverSettings(true)} onClick={() => console.log('hi')} style={{color: 'rgb(0,173,181)'}}/>
                    : <SettingOutlined className={style.icon} onMouseLeave={() => setIsOnHoverSettings(false)} onMouseEnter={() => setIsOnHoverSettings(true)} onClick={() => console.log('hi')}/>
                    }
                    {
                        isOnHoverFilter
                    ? <FilterOutlined className={style.icon} onMouseLeave={() => setIsOnHoverFilter(false)} onMouseEnter={() => setIsOnHoverFilter(true)} onClick={() => console.log('hi')}style={{color: 'rgb(0,173,181)'}}/>
                    : <FilterOutlined className={style.icon} onMouseLeave={() => setIsOnHoverFilter(false)} onMouseEnter={() => setIsOnHoverFilter(true)} onClick={() => console.log('hi')}/>
                    }
                    <Input
                        allowClear
                        ref={input}
                        placeholder="input search text"
                        size="large"
                        onChange={(val) => console.log(val)}
                        suffix={<>
                            {
                                isOnHoverColor
                                ? <SearchOutlined onMouseLeave={() => setIsOnHoverColor(false)} onMouseEnter={() => setIsOnHoverColor(true)} onClick={onClick} style={{marginLeft: '10px', color: 'rgb(0,173,181)'}}/>
                                : <SearchOutlined onMouseLeave={() => setIsOnHoverColor(false)} onMouseEnter={() => setIsOnHoverColor(!isOnHoverColor)} onClick={onClick} style={{marginLeft: '5px'}}/>
                            }
                            </>
                        }
                        //onSearch={onSearch}
                        />

                </>
            }
        </div>
    )
}

export default SearchRow