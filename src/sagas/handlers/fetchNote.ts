import { put } from 'redux-saga/effects';
import { Action, ActionSuccess } from '../../actions/action'

export function* fetchNode(action: Action) {
    yield put({
        type: 'ADD_NOTE_SUCCESS',
        payload: action.payload,
    });
}