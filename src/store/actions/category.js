import axios from 'axios'
import env from '../../env/env'

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`${env.host}/categories`)
    }
}