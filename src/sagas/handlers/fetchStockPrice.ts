import { call, put } from 'redux-saga/effects';
import { FETCH_STOCK_PRICE_REQUEST } from '../../actions/stock'
import { requestGetStock } from '../requests/stock'
import { StockApiResponse } from '../interface/stock'

export function* fetchStockPrice(action: FETCH_STOCK_PRICE_REQUEST) {
    try {
        
        const { data } = yield call(requestGetStock, action.payload)
        
        yield put({
            type: 'FETCH_STOCK_PRICE_SUCCESS',
            payload: data,
        });

    }catch(e) {
        yield put({
            type: 'FETCH_STOCK_PRICE_ERROR',
            error: e,
        });

    }
}