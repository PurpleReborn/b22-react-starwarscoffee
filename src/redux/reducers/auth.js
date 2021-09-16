const initialState = {
    message: '',
    onAuth: false,
    token: null,
    errMessage:'',
    isRegister:false,
    errMessage2:''
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
                isRegister: !state.isRegister,
              };
        }
        case 'REGISTER_FAILED': {
            return {
              ...state,
              isRegister:false,
              errMessage: action.payload,
            };
          }
        case 'AUTH_LOGOUT': {
            return {
                ...state,
                token: null
            }
        }
        case 'SET_CLEAR_MESSAGE':
            return {
              ...state,
              errMessage: '',
            }
        default: {
            return{
                ...state
                
            }
        }
    }
}

export default auth