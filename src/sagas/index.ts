import {  StrictEffect, takeLatest } from 'redux-saga/effects'
import { fetchNode } from './handlers/fetchNote'

export default function *watch(): Generator<StrictEffect> {
    yield takeLatest("ADD_NOTE", fetchNode)
}