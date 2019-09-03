const initialState = {
    item: [],
    isLoading: false,
    error: null
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MENU':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_MENU_PENDING':
            return {
                ...state,
                item: null,
                isLoading: false
            }
        case 'GET_MENU_FULFILLED':
            return {
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'GET_MENU_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }
        case 'GET_MENU_CATEGORY':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_MENU_CATEGORY_PENDING':
            return {
                ...state,
                item: null,
                isLoading: false
            }
        case 'GET_MENU_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'GET_MENU_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }
        default:
            return state
    }
}

export default menu