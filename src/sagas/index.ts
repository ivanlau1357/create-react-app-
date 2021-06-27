import {  StrictEffect, takeLatest } from 'redux-saga/effects'
import { fetchNode } from './handlers/fetchNote'
import { fetchStockPrice } from './handlers/fetchStockPrice'
import { getAllPolls } from './handlers/getAllPolls'
import { votePoll } from './handlers/votePoll'

export default function *watch(): Generator<StrictEffect> {
    yield takeLatest("ADD_NOTE", fetchNode)
    yield takeLatest("FETCH_STOCK_PRICE_REQUEST", fetchStockPrice)
    yield takeLatest("GET_ALL_POLLS_REQUEST", getAllPolls)
    yield takeLatest("VOTE_POLL_REQUEST", votePoll)
}