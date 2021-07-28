const initialState = {
    msg:'',
    errMsg:'',
    data:'',
}

const user = (state=initialState, action)=> {
    switch(action.type){
        case 'USER_GET_DETAILS': {
            return {
              ...state,
              data: action.payload,
            };
          }
          case 'USER_GET_DETAILS_FAILED': {
            return {
              ...state,
              errMsg: action.payload,
            };
          }
        case 'USER_UPDATE': {
            return {
                ...state,
                msg: action.payload
            }
        }
        case 'USER_UPDATE_FAILED': {
            return {
                ...state,
                msg: action.payload
            }
        }    
         
        default: {
            return {
                ...state
            }
        }
    }
}

export default user