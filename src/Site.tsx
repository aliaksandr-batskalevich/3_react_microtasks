import React from 'react'
import {Header} from './Header';
import {Body} from './Body';
import {Footer} from './Footer';
import {ArrObjType, CarsType} from "./App";

type SitePropsType = {
    info: ArrObjType
    cars: CarsType
}

export const Site = (props: SitePropsType) => {
    return (
        <div className='SiteWrapper'>
            <Header infoHeader={props.info.header}/>
            <Body infoBody={props.cars}/>
            <Footer infoFooter={props.info.footer}/>
        </div>
    )
}