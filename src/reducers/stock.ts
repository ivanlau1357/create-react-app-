import { FETCH_STOCK_PRICE_REQUEST, FETCH_STOCK_PRICE_SUCCESS } from '../actions/stock'

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

type StockActions = FETCH_STOCK_PRICE_REQUEST | FETCH_STOCK_PRICE_SUCCESS

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
        default: 
            return state;
    }
    
}

export default StockReducer