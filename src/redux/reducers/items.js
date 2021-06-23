const initialState = {
    data: [],
    details: {}
    // pageInfo:[]
    
}

const items = (state=initialState, action)=> {
    switch(action.type){
        case 'ITEMS_GET': {
            return {
            ...state,
            data: action.payload.items
            // pageInfo:action.payload.pageInfo
        }
    }
        case 'ITEMS_GET_NEXT': {
            return {
            ...state,
            data: [
            ...state.data,
            ...action.payload.items
            ]
            // pageInfo:action.payload.pageInfo
        }
    }
        case 'ITEMS_GET_DETAILS' : {
            return {
                ...state,
                details: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default items