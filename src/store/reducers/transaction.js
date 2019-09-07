const initialState = {
    item: [],
    isLoading: false,
    error: null
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                item: null,
                isLoading: true
            }
        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'GET_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: payload.message
            }
        case 'ADD_TRANSACTION_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'ADD_TRANSACTION_FULFILLED':
            return {
                ...state,
                item: action.payload.data,
                isLoading: false
            }
        case 'ADD_TRANSACTION_REJECTED':
            return {
                ...state,
                item: null,
                isLoading: false
            }
        case 'UPDATE_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'UPDATE_TRANSACTION_FULFILLED':
            return {
                ...state,
                item: action.payload.data,
                isLoading: false
            }
        case 'UPDATE_TRANSACTION_REJECTED':
            return {
                ...state,
                item: null,
                isLoading: false
            }
        default:
            return state
    }
}

export default transaction