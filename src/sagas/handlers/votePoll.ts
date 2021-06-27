import { call, put } from 'redux-saga/effects';
import { VOTE_POLL_REQUEST } from '../../actions/polls'
import { requestVotePoll } from '../requests/poll'
import { StockApiResponse } from '../interface/stock'

export function* votePoll(action: VOTE_POLL_REQUEST) {
    try {
        const { data } = yield call(requestVotePoll, action.payload)
        
        yield put({
            type: 'VOTE_POLL_SUCCESS',
        });

        yield put({
            type: 'GET_ALL_POLLS_REQUEST'
        })

    }catch(e) {
        yield put({
            type: 'VOTE_POLL_ERROR',
            error: e,
        });

    }
}