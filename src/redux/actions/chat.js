import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const chatList = (token) => {
    return async (dispatch) => {
      const { data } = await http(token).get(`${URL}/chat`)
      dispatch({
        type: 'CHAT_LIST',
        payload: data.results
      })
    }
  }

  export const chatAll = (token, number) => {
    return async (dispatch) => {
      const { data } = await http(token).get(`${URL}/chat/allChat?users=${number}`)
      dispatch({
        type: 'CHAT_LIST_ALL',
        payload: data.results
      })
    }
  }

  export const sendChat = (token,recipient, message) => {
    return async (dispatch) => {
      const form = new URLSearchParams()
      form.append('recipient', recipient)
      form.append('message', message)
      try{
        const {data} = await http(token).post(`${URL}/chat`, form.toString())
        dispatch({
          type: 'SEND_CHAT',
          payload: data.message
        })
      } catch (err) {
        dispatch({
          type: 'SEND_CHAT_FAILED',
          payload: err.response.data.message
        })
        setTimeout(() => {
          dispatch({type: 'CHAT_RESET'});
        }, 3000);
      }
    }
  }

  export const searchUser = (token,column, search) => {
    return async (dispatch) => {
      try {
        const {data} = await http(token).get(`${URL}/chat/search?column=${column}&search=${search}`)
        dispatch({
          type: 'USER_SEARCH',
          payload: data.results
        })
      } catch (err) {
        dispatch({
          type: 'USER_SEARCH_FAILED',
          payload: err.response.data.message
        })
        setTimeout(() => {
          dispatch({type: 'CHAT_RESET'});
        }, 3000);
      }
    }
  }

  export const deleteChat = (token,recipient, id) => {
    return async (dispatch) => {
      const form = new URLSearchParams()
      form.append('recipient', recipient)
      const {data} = await http(token).delete(`${URL}/chat/${id}`, {data: form})
      const { data: data2 } = await http(token).get(`${URL}/chat`)
      dispatch({
        type: 'CHAT_LIST',
        payload: data2.results
      })
  
      const { data: data3 } = await http(token).get(`${URL}/chat/allChat?users=${recipient}`)
        dispatch({
          type: 'CHAT_LIST_ALL',
          payload: data3.results
        })
    }
  }