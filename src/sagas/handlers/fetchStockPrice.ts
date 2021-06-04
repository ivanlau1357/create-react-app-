import { put } from 'redux-saga/effects';
import { FETCH_STOCK_PRICE_REQUEST } from '../../actions/stock'

export function* fetchStockPrice(action: FETCH_STOCK_PRICE_REQUEST) {
    console.log(action);
    yield put({
        type: 'FETCH_STOCK_PRICE_SUCCESS',
        payload: action.payload,
    });
}