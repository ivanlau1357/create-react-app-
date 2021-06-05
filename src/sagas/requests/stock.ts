import axios from 'axios'

export function requestGetStock() {
    return axios.request({
        method: 'get',
        url: 'http://localhost:5000/stock?stocks[]=bitcoin&stocks[]=ether',
    })
}