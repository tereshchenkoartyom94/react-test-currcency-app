import {ICurrencyState} from "../reducers/currency/types";
import {IDataRow} from "../transducers/table";

export const getDataRowSelector = (state: ICurrencyState): IDataRow[] => state.data;