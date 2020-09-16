import React, {FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createDataRow, IDataRow} from "../../transducers/table";

const rows: IDataRow[] = [
    createDataRow('USD/UAH', 99, 99),
    createDataRow('EUR/UAH', 97, 98),
    createDataRow('BTC/USD', 97, 98),
];

export const CurrencyTable: FunctionComponent<any> = () => {
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