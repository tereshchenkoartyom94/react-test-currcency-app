import {ICurrencyState} from "./currency/types";
import {Action} from "redux";
import { ThunkAction } from "redux-thunk";

export interface IRootState {
    currency: ICurrencyState
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IRootState,
    unknown,
    Action<string>
    >