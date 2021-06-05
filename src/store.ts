import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';

import * as reducers from './reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

export const store = createStore(
    combineReducers(reducers),
    compose(
        applyMiddleware(
            saga,
        ),
        devToolsEnhancer({
            trace: true,
        })
    ),
);

saga.run(rootSaga);

export type Stock = {
    name?: string;
    price?: string;
    volume?: string;
    change?: string;
}

export interface Store {
    notesReducer: {
        notes: string[];
    }
    stockReducer: {
        stocks: Stock[];
    }
}