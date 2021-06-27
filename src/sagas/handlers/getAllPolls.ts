import { call, put } from 'redux-saga/effects';
import { GET_ALL_POLLS_REQUEST } from '../../actions/polls'
import { requestGetAllPolls } from '../requests/poll'
import { StockApiResponse } from '../interface/stock'

export function* getAllPolls(action: GET_ALL_POLLS_REQUEST) {
    try {
        
        const { data } = yield call(requestGetAllPolls)

        console.log('data--------', data)
        
        yield put({
            type: 'GET_ALL_POLLS_SUCCESS',
            payload: data,
        });

    }catch(e) {
        yield put({
            type: 'GET_ALL_POLLS_ERROR',
            error: e,
        });

    }
}