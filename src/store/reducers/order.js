const initialState = {
    item: [],
    isLoading: false,
    error: null,
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_ORDER':
            return {
                ...state,
                item: action.payload
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
        default:
            return state 
    }
}

export default order