import axios from 'axios'

export function requestGetStock(payload: string[]) {
    return axios.request({
        method: 'get',
        url: 'http://localhost:5000/stock',
        params: { stocks: payload },
    })
}