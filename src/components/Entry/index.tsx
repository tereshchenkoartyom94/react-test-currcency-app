import React, {FunctionComponent} from 'react';
import { Header } from "../Header";
import {CurrencyTable} from "../CurrencyTable";

export const Entry: FunctionComponent<any> = () => {
    return (
       
        <>
            <Header></Header>
            <CurrencyTable data={undefined}/>
        </>  
    )
}