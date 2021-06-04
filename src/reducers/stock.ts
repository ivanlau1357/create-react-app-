import { FETCH_STOCK_PRICE_REQUEST, FETCH_STOCK_PRICE_SUCCESS } from '../actions/stock'
export interface StockState {
    stock: {
        bitcoin?: string;
        ether?: string;
        litecoin?: string;
        monero?: string;
        ripple?: string;
        dogecoin?: string;
        dash?: string;
        maidsafeecoin?: string;
        lisk?: string;
        storjconX?: string;
    };
}

const initialState: StockState = {
    stock: {},
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
                stock: {
                    ...state.stock,
                }
            }
        }
        default: 
            return state;
    }
    
}

export default StockReducer