import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getHistory= (token)=> {
  
        return async (dispatch) => {
            try{
                const {data} = await http(token).get(`${URL}/history`)
                dispatch({
                    type:'HISTORY_GET',
                    payload:data.results
                        
                    
                })
            }catch(err){
                dispatch({
                    type: 'HISTORY_GET_FAILED',
                    payload: err.response.data.message
                })
            }
        }
   
    }
