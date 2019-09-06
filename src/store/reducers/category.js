const initialState = {
    item: [],
    isLoading: false,
    error: null
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                item: null,
                isLoading: true
            }
        case 'GET_CATEGORY_FULFILLED':
            return{
                ...state,
                isLoading: false,
                item: action.payload.data
            }
        case 'GET_CATEGORY_REJECTED':
            return{
                ...state,
                isLoading: false,
                error: payload.message
            }
        default:
            return state
    }
}

export default category