import {  StrictEffect, takeLatest } from 'redux-saga/effects'
import { fetchNode } from './handlers/fetchNote'
import { fetchStockPrice } from './handlers/fetchStockPrice'

export default function *watch(): Generator<StrictEffect> {
    yield takeLatest("ADD_NOTE", fetchNode)
    yield takeLatest("FETCH_STOCK_PRICE_REQUEST", fetchStockPrice)
}