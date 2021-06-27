import { pollApiResponse } from '../sagas/interface/polls'

export type GET_ALL_POLLS_REQUEST = {type: 'GET_ALL_POLLS_REQUEST'}
export type GET_ALL_POLLS_SUCCESS = {type: 'GET_ALL_POLLS_SUCCESS', payload: pollApiResponse[]}
export type GET_ALL_POLLS_ERROR = {type: 'GET_ALL_POLLS_ERROR'}

export const getAllPolls = (): GET_ALL_POLLS_REQUEST => ({
    type: 'GET_ALL_POLLS_REQUEST',
})

export const getAllPollsSuccess = (payload: pollApiResponse[]): GET_ALL_POLLS_SUCCESS => ({
    type: 'GET_ALL_POLLS_SUCCESS',
    payload,
})

export const getAllPollsFail = (): GET_ALL_POLLS_ERROR => ({
    type: 'GET_ALL_POLLS_ERROR',
})

export type VOTE_POLL_REQUEST = {type: 'VOTE_POLL_REQUEST', payload: {id: string, label: string}}
export type VOTE_POLL_SUCCESS = {type: 'VOTE_POLL_SUCCESS'}
export type VOTE_POLL_ERROR = {type: 'VOTE_POLL_ERROR'}

export const votePoll = (payload: {id: string, label: string}): VOTE_POLL_REQUEST => ({
    type: 'VOTE_POLL_REQUEST',
    payload
})

export const votePollSuccess = (): VOTE_POLL_SUCCESS => ({
    type: 'VOTE_POLL_SUCCESS',
})

export const votePollFail = (): VOTE_POLL_ERROR => ({
    type: 'VOTE_POLL_ERROR',
})