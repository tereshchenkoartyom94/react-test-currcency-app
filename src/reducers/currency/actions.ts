import {AppThunk} from "../types";
import {Dispatch} from "redux";
import {getCurrencyApi} from "../../api/currencyApi";
import {createDataForTable, IDataRow} from "../../transducers/table";
import {GetCurrencyAction} from "./types";

export const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrency = (id?: number | string):AppThunk => async (dispatch: Dispatch) => {
    const response = await getCurrencyApi(id);

    const rows = createDataForTable(response.data);
    dispatch(getCurrencySuccess(rows))
};

export const getCurrencySuccess = (dataRow: IDataRow[]): GetCurrencyAction => ({
    type: GET_CURRENCY_SUCCESS,
    payload: dataRow
});