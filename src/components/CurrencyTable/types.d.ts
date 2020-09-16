import {IDataRow} from "../../transducers/table";
import {ICurrencyApiError} from "../../api/types";

export interface IStateProps {
    rows: IDataRow[];
    isLoading: boolean;
    error?: ICurrencyApiError;
}

export interface IDispatchProps {
    getCurrencyRequest: (id?: number) => void;
    getCurrencySuccess?: () => void;
    getCurrencyError?: () => void
}

export type ICurrencyTableComponentProps = IStateProps & IDispatchProps;
