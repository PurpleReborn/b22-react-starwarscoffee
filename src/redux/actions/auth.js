 import { http } from "../../helpers/http"

 const {REACT_APP_BACKEND_URL: URL} = process.env
 
 export const toggleAuth = ()=> {
    return {
        type: 'AUTH_TOGGLE'
    }
}

export const authLogin = (email, password) => {
    return async (dispatch) => {
        const form = new URLSearchParams()
        form.append('email', email)
        form.append('password',password)
        try{
            const {data} = await http().post(`${URL}/auth/login`, form.toString())
            dispatch({
                type:'AUTH_LOGIN',
                payload: data.results.token
            })
        }catch(err){
            dispatch({
                type: 'AUTH_LOGIN_FAILED',
                payload: err.response.data.message
            })
        }
    }
}

export const authRegister = (email, password,number) => {
    return async (dispatch) => {
        const formReg = new URLSearchParams()
        formReg.append('email', email)
        formReg.append('password',password)
        formReg.append('number',number)
        try{
            const {data} = await http().post(`${URL}/auth/register`, formReg.toString())
            dispatch({
                type:'REGISTER',
                payload: data
            })
        }catch(err){
            dispatch({
                type: 'REGISTER_FAILED',
                payload: err.response.data.message
            })
        }
    }
}

export const authLogout = ()=>({
    type: 'AUTH_LOGOUT'
})


