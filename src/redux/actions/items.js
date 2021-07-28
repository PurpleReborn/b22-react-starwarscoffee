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

export const getDataSearch = (token, search, limit, page, order, sort) => async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/items?search=${search}&limit=${limit}&order=${order}&sort=${sort}&page=${page}`);
      dispatch({
        type: 'GET_PRODUCT_SEARCH',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_PRODUCT_SEARCH_FAILED',
        payload: err.response.data.message,
      });
    }
  };