import React, {FunctionComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';

import { useStyles } from "./styles";

export const Header: FunctionComponent<any> = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <img src="../../../assets/logo.png" height={100} width={100} alt=""/>
            <h1>Currency app</h1>
        </AppBar>
    )
};