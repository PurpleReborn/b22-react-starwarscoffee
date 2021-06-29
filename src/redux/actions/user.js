import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getUser = (token) => {
    return async (dispatch)=> {
        const {data} = await http(token).get(`${URL}/profile`)
        dispatch({
            type: 'USER_GET_DETAILS',
            payload: data.results
        })
    }
}

// export const updateUser = (data, token) => {
//     return async (dispatch)=> {
//         const {data} = await http(token).get(``)
//     }
// }

