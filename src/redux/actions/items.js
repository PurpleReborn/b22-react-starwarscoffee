import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getItems = (url)=> {
    if(!url){
        return async (dispatch) => {
            const {data} = await http().get(`${URL}/items`)
            dispatch({
                type: 'ITEMS_GET',
                payload:{
                    items: data.results
                    // pageInfo:data.pageInfo
                }
            })
        }
    }else{
        return async (dispatch) => {
            const {data} = await http().get(url)
            dispatch({
                type: 'ITEMS_GET_NEXT',
                payload:{
                    items: data.results
                    // pageInfo:data.pageInfo
                }
            })
        }
    }
}

export const getDetails = (id) => {
    return async (dispatch)=> {
        const {data} = await http().get(`${URL}/items/${id}`)
        dispatch({
            type: 'ITEMS_GET_DETAILS',
            payload: data.results
        })
    }
}