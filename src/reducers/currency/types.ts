import {ICurrencyApiError, ICurrencyApiResponse} from "../../api/types";
import {GET_CURRENCY_ERROR, GET_CURRENCY_REQUEST, GET_CURRENCY_SUCCESS} from "./actions";
import {IDataRow} from "../../transducers/table";
import {Action} from "redux";

export interface ICurrencyState {
    data: IDataRow[];
    isLoading: boolean;
    error?: ICurrencyApiError;
}

export const CHANGE_STATE = 'CHANGE_STATE';

interface IChangeStateAction {
    type: typeof CHANGE_STATE,
    payload: any;
}

interface GetCurrencyRequest {
    type: typeof GET_CURRENCY_REQUEST,
}

interface GetCurrencyError {
    type: typeof GET_CURRENCY_ERROR,
    payload: ICurrencyApiError,
}

interface GetCurrencySuccess {
    type: typeof GET_CURRENCY_SUCCESS,
    payload: ICurrencyApiResponse[],
}

interface IGetCurrencySuccessPayload {
    payload: IDataRow[];
}

export type CurrencyActions = IChangeStateAction & GetCurrencyRequest & GetCurrencyError & GetCurrencySuccess;
export type GetCurrencyAction = Action<string> & IGetCurrencySuccessPayload;