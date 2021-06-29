const initialState = {

    data: [],
    errMessage : null

    // pageInfo:[]
    
}

const history = (state=initialState, action)=> {
    switch(action.type){
        case 'HISTORY_GET': {
            return {
            ...state,
            data: action.payload
            // pageInfo:action.payload.pageInfo
        }
    }        case 'HISTORY_GET_FAILED': {
        return {
            ...state,
            errMessage: action.payload
        }
    }
       
        default: {
            return {
                ...state
            }
        }
    }
}

export default history