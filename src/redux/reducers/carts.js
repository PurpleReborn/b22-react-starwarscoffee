const initialState = {
    items : [],
    totalItem: 0,
    transaction: [],
}

const carts = (state=initialState, action)=>{
    switch(action.type){
        case 'CART_ADD_ITEM': {
            return {
                ...state,
                items: [...state.items, ...[action.payload]]
            }
        }
        case 'SET_CREATE_TRANSACTION':
            return {
              ...state,
              transaction: action.payload,
            }
        default : {
            return {
                ...state
            }
        }
    }
}

export default carts