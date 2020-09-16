import {ICurrencyApiResponse} from "../api/types";

export interface IDataRow {
    currency: string;
    buyValue: number;
    sellValue: number;
}

export const createDataRow = (
    currency: string,
    buyValue: number,
    sellValue: number
): IDataRow => ({
    currency,
    buyValue,
    sellValue
});

export const createDataForTable = (apiResponse: ICurrencyApiResponse[]):IDataRow[] => {
    return apiResponse.map(apiResponseElement => {
        const {ccy, base_ccy, buy, sale} = apiResponseElement;

        return createDataRow(`${base_ccy}/${ccy}`, buy, sale)
    })
};