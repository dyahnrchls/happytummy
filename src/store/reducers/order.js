const initialState = {
    item: [],
    isLoading: false,
    error: null,
    dataItem: []
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_ORDER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_ORDER_FULFILLED':
            return{
                ...state,
                dataItem: action.payload.data,
                isLoading: false
            }
        case 'POST_ORDER_REJECTED':
            return{
                ...state,
                dataItem: null,
                isLoading:false
            }
        case 'GET_ORDER_PENDING':
            return{
                ...state,
                item: null,
                isLoading: true
            }
        case 'GET_ORDER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'GET_ORDER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }
        case 'PATCH_ORDER_PENDING':
            return {
                ...state,
                item: null,
                isLoading: true
            }
        case 'PATCH_ORDER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'PATCH_ORDER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }
        case 'ADD_TO_ORDER':           
            return{
                ...state,
                item: [...state.item, action.payload]
            }
        case 'UPDATE_ORDER':
            return{
                ...state,
                item:[...action.payload]
            }
        case 'RESET_ORDER':
            return{
                ...state,
                item: action.payload
            }
        default:
            return state 
    }
}

export default order