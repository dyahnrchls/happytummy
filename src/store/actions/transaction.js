import axios from 'axios'
import env from '../../env/env'

export const getTransaction = (id) => {
    return{
        type: 'GET_TRANSACTION',
        payload: axios.get(`${env.host}/transaction/${id}`)
    }
}

export const addTransaction = (tableNumber) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: axios({
            url: `${env.host}/transaction`,
            method: 'POST',
            data: tableNumber,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export const updateTransaction = (data, id) => {
    return{
        type: 'UPDATE_TRANSACTION',
        payload: axios({
            url: `${env.host}/transaction/${id}`,
            method: 'PATCH',
            data: data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}