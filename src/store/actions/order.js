import axios from 'axios'
import env from '../../env/env'

export const postOrder = (order) => {
    return{
        type: 'POST_ORDER',
        payload: axios.post(`${env.host}/order`)
    }
}

export const addToOrder = (id) => {
    return{
        type: 'ADD_TO_ORDER',
        payload: id
    }
}