import axios from 'axios';
import {ICurrencyApiResponse} from "./types";

const BASE_URL = 'https://api.privatbank.ua/p24api';

export const getCurrencyApi = (currencyId: string | number = 3): Promise<{data: ICurrencyApiResponse[]}> => {
    return axios.get(`${BASE_URL}/pubinfo?json&exchange&coursid=${currencyId}`)
};