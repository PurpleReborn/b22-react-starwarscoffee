 import { http } from "../../helpers/http"
 import { useHistory } from 'react-router';
 import Swal from 'sweetalert2'

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
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Success create account',
                showConfirmButton: false,
                timer: 2000,
                iconColor:'#6A4029',
              })
            // let history = useHistory()
            // history.push('/login')
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

// export const clearMessage = () => ({
//     type: 'SET_CLEAR_MESSAGE',
//   })

  export const clearMessage = () => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'SET_CLEAR_MESSAGE'
      });
    }, 5000);
  };


