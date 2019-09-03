const initialState = {
    item: [],
    isLoading: false,
    error: null,
    addItem: [{ id: 0, qty: 0 }],
    total: 0
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_ORDER':
            return {
                ...state,
                data: action.payload
            }
        case 'ADD_TO_ORDER':
            let existedItem = state.addItem.find(item => item.id === action.payload)
            if(existedItem){
                addItem.qty+=1
                return{
                    ...state,
                    total: state.total + addItem.qty
                }
            }else{
                addItem.qty = 1
                return {
                    ...state,
                    addItem: [...state.addItem, action.payload],
                    total: state.total + addItem.qty
                }
            }
        default:
            return state 
    }
}

export default order