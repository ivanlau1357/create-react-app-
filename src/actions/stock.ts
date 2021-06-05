import { StockApiResponse } from '../sagas/interface/stock'

export type FETCH_STOCK_PRICE_REQUEST = {type: 'FETCH_STOCK_PRICE_REQUEST', payload: string[]}
export type FETCH_STOCK_PRICE_SUCCESS = {type: 'FETCH_STOCK_PRICE_SUCCESS', payload: StockApiResponse[]}
export type FETCH_STOCK_PRICE_ERROR = {type: 'FETCH_STOCK_PRICE_ERROR'}

export const fetchStockPrice = (payload: string[]): FETCH_STOCK_PRICE_REQUEST => ({
    type: 'FETCH_STOCK_PRICE_REQUEST',
    payload,
})

export const fetchStockPriceSuccess = (payload: StockApiResponse[]): FETCH_STOCK_PRICE_SUCCESS => ({
    type: 'FETCH_STOCK_PRICE_SUCCESS',
    payload,
})

export const fetchStockPriceError = (): FETCH_STOCK_PRICE_ERROR => ({
    type: 'FETCH_STOCK_PRICE_ERROR',
})