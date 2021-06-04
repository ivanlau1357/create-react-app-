import { FETCH_STOCK_PRICE_REQUEST, FETCH_STOCK_PRICE_SUCCESS } from '../actions/stock'

export type Stock = {
    price?: string;
    volume?: string;
    change?: string;
}
export interface StockState {
    stock: {
        bitcoin?: Stock;
        ether?: Stock;
        litecoin?: Stock;
        monero?: Stock;
        ripple?: Stock;
        dogecoin?: Stock;
        dash?: Stock;
        maidsafeecoin?: Stock;
        lisk?: Stock;
        storjconX?: Stock;
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