const initialState = {
    onAuth: false,
    token: null,
    errMessage:'',
    isRegister:false
}

const auth = (state=initialState, action)=>{
    switch(action.type){
        case 'AUTH_TOGGLE': {
            return {
                ...state,
                onAuth: !state.onAuth
            }
        }
        case 'AUTH_LOGIN': {
            return {
                ...state,
                token : action.payload
            }
        }
        case 'AUTH_LOGIN_FAILED': {
            return {
                ...state,
                errMessage: action.payload
            }
        }
        case 'REGISTER': {
            return {
                ...state,
                succMsg: action.payload,
              };
        }
        case 'REGISTER_FAILED': {
            return {
              ...state,
              errMsg: action.payload,
            };
          }
        case 'AUTH_LOGOUT': {
            return {
                ...state,
                token: null
            }
        }
        default: {
            return{
                ...state
                
            }
        }
    }
}

export default auth