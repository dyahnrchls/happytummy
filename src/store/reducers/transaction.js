const initialState = {
    item: [],
    isLoading: false,
    error: null
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                item: null,
                isLoading: false
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
        default:
            return state
    }
}

export default transaction