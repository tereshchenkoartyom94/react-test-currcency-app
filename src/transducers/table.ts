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
})