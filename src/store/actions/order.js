import axios from 'axios'
import env from '../../env/env'

export const postOrder = (order) => {
    return{
        type: 'POST_ORDER',
        payload: axios({
            url: `${env.host}/order`,
            method: 'POST',
            data: order,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export const addToOrder = (data) => {
    return{
        type: 'ADD_TO_ORDER',
        payload: data
    }
}

export const updateOrder = (data) => {
    return{
        type: 'UPDATE_ORDER',
        payload: data
    }
}

export const getOrder = (transactionId) => {
    return{
        type: 'GET_ORDER',
        payload: axios.get(`${env.host}/order/transaction/${transactionId}`)
    }
}

export const patchOder = (data, orderId) => {
    return{
        type: 'PATCH_ORDER',
        payload: axios({
            url: `${env.host}/order/${orderId}`,
            method: 'PATCH',
            data: data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )}}

export const resetOrder = () => {
    return{
        type: 'RESET_ORDER',
        payload: []
    }
}