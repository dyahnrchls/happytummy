import axios from 'axios'
import env from '../../env/env'

export const getMenu = () => {
    return {
        type: 'GET_MENU',
        payload: axios.get(`${env.host}/menus`)
    }
}

export const getMenuCategory = (categoryId) => {
    return{
        type: 'GET_MENU_CATEGORY',
        payload: axios.get(`${env.host}/menu/category/${categoryId}`)
    }
}
