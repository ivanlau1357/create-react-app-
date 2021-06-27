import axios from 'axios'

export function requestGetAllPolls() {
    return axios.request({
        method: 'get',
        url: 'http://localhost:5000/polls',
        params: { voteInfo: true },
    })
}

export function requestVotePoll(payload:{id:string, label:string}) {
    return axios.request({
        method: 'post',
        url: 'http://localhost:5000/vote',
        data: {
            pollId: payload.id,
            label: payload.label,
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}