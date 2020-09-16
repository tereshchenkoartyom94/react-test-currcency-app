import React, {FunctionComponent, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ICurrencyTableComponentProps, IDispatchProps, IStateProps} from "./types";
import CircularProgress from '@material-ui/core/CircularProgress'
import {IRootState} from "../../reducers/types";
import {getDataRowSelector} from "../../selectors/currency";
import {getCurrency} from "../../reducers/currency/actions";
import {connect} from "react-redux";

const CurrencyTable: FunctionComponent<ICurrencyTableComponentProps> = (props ) => {
    const { rows, getCurrencyRequest, isLoading} = props;

    useEffect(() => {
        getCurrencyRequest();
    }, []);

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Currency/CurrentData</TableCell>
                        <TableCell>Buy</TableCell>
                        <TableCell>Sell</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.currency}>
                            <TableCell component="th" scope="row">
                                {row.currency}
                            </TableCell>
                            <TableCell>{row.buyValue}</TableCell>
                            <TableCell>{row.sellValue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

const mapStateToProps = ({currency}:IRootState):IStateProps => {
    return {
        rows: getDataRowSelector(currency),
        isLoading: currency.isLoading,
        error: currency.error,
    }
};

const mapDispatchToProps= {
    getCurrencyRequest: getCurrency,
};

export const ConnectedCurrencyTable = connect(mapStateToProps, mapDispatchToProps)(CurrencyTable) as FunctionComponent<any>;

