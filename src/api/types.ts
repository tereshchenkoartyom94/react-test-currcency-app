export interface ICurrencyApiResponse {
    ccy: string;
    base_ccy: string;
    buy: number;
    sale: number;
}

export interface ICurrencyApiError {
    code: number;
    message: string;
};