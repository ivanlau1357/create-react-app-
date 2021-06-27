import { 
    GET_ALL_POLLS_REQUEST, 
    GET_ALL_POLLS_SUCCESS, 
    GET_ALL_POLLS_ERROR,
    VOTE_POLL_REQUEST,
    VOTE_POLL_SUCCESS,
    VOTE_POLL_ERROR, 
} from '../actions/polls'

export interface options {
    id: string,
    label: string,
}

export interface poll {
    id: string,
    title: string,
    publishedDate: string,
    answer: {
        type: 'Single' | 'Multi',
        options: options[]
    },
    voteInfo?: {
        [key: string]: string;
    }
}
export interface PollState {
    polls: poll[]
}

const initialState: PollState = {
    polls: [],
}

type PollAction = GET_ALL_POLLS_REQUEST |
    GET_ALL_POLLS_SUCCESS | 
    GET_ALL_POLLS_ERROR |
    VOTE_POLL_REQUEST |
    VOTE_POLL_SUCCESS |
    VOTE_POLL_ERROR


const PollReducer = (state: PollState = initialState, action: PollAction) => {
    switch(action.type) {
        case "GET_ALL_POLLS_REQUEST": 
        case "VOTE_POLL_REQUEST":
        case "VOTE_POLL_SUCCESS":{
            return {
                ...state,
            }
        }
        case "GET_ALL_POLLS_SUCCESS": {
            return {
                ...state,
                polls: action.payload
            }
        }
        case "GET_ALL_POLLS_ERROR":
        case "VOTE_POLL_ERROR": {
            // for handling api error, currently not using
            return {
                ...state,
                ...initialState,
                error: true,
            }
        }
        default: 
            return state;
    }
    
}

export default PollReducer