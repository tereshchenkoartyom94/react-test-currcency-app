import React, {FunctionComponent} from 'react';

import { Header } from "../Header";
import {ConnectedCurrencyTable} from "../CurrencyTable";
import { store } from "../../store/createStore";

export const Entry: FunctionComponent<any> = () => {
    return (
       
        <>
            <Header></Header>
            <ConnectedCurrencyTable />
        </>  
    )
}