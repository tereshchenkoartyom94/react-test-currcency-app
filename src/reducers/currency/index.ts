import {CurrencyActions, ICurrencyState,} from "./types";
import {GET_CURRENCY_REQUEST, GET_CURRENCY_SUCCESS} from "./actions";


const currencyInitialState: ICurrencyState = {
    data: [],
    isLoading: false,
    error: undefined,
};

export const currencyReducer = (state: ICurrencyState = currencyInitialState, {payload, type}: CurrencyActions) => {
    switch (type) {
        case GET_CURRENCY_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case GET_CURRENCY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
            };

        default:
            return state;
    }
};