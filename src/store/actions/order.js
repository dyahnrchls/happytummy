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
