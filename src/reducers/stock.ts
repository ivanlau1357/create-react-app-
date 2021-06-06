import { FETCH_STOCK_PRICE_REQUEST, FETCH_STOCK_PRICE_SUCCESS, FETCH_STOCK_PRICE_ERROR } from '../actions/stock'

export type Stock = {
    name?: string;
    price?: string;
    volume?: string;
    change?: string;
}
export interface StockState {
    stocks: Stock[]
}

const initialState: StockState = {
    stocks: [],
}

type StockActions = FETCH_STOCK_PRICE_REQUEST | FETCH_STOCK_PRICE_SUCCESS | FETCH_STOCK_PRICE_ERROR

const StockReducer = (state: StockState = initialState, action: StockActions) => {
    switch(action.type) {
        case "FETCH_STOCK_PRICE_REQUEST": {
            return {
                ...state,
            }
        }
        case "FETCH_STOCK_PRICE_SUCCESS": {
            return {
                ...state,
                stocks: action.payload
            }
        }
        case "FETCH_STOCK_PRICE_ERROR": {
            // for handling api error, currently not using
            return {
                ...state,
                ...initialState,
                error: true,
            }
        }
        default: 
            return state;
    }
    
}

export default StockReducer