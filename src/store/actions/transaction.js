import axios from 'axios'
import env from '../../env/env'

export const getTransaction = () => {
    return{
        type: 'GET_TRANSACTION',
        payload: axios.get(`${env.host}/transactions`)
    }
}

export const postTransaction = () => {
    return {
        type: 'POST_TRANSACTION',
        payload: axios.post(`${env.host}/transaction`)
    }
}

export const patchTransaction = (id) => {
    return{
        type: 'PATCH_TRANSACTION',
        payload: axios.patch(`${env.host}/transaction/${id}`)
    }
}