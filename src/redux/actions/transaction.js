import { http } from '../../helpers/http'
import Swal from 'sweetalert2'
// const Toast = Swal.fire({
//     position: 'center',
//     icon: 'info',
//     showConfirmButton: false,
//      timer: 2000,
//     iconColor:'#6A4029',
//   })

const {REACT_APP_BACKEND_URL : URL} = process.env

// export const getHistory = (token) => {
//   return async (dispatch) => {
//     console.log(token)
//     const { data } = await http(token).get(`${URL}/historyTrx`)
//     console.log(data.results)
//     dispatch({
//       type: 'HISTORY_GET',
//       payload: data.results,
//     })
//   }
// }

export const getHistory= (token)=> {
  
        return async (dispatch) => {
            try{
                const {data} = await http(token).get(`${URL}/historyTrx`)
                dispatch({

                    type:'HISTORY_GET',
                    payload:data.results
                        
                    
                })
                console.log(token)
            }catch(err){
                dispatch({
                    type: 'HISTORY_GET_FAILED',
                    payload: err.response.data.message
                })
            }
        }
   
    }

    export const createTransaction = (item_id, item_amount,  item_additional_price, payment_method, token) => async (dispatch) => {
        console.log(item_id)
        const form = new URLSearchParams()
        item_id.map((value) => form.append('item_id', value))
        form.append('item_additional_price', item_additional_price)
        form.append('payment_method', payment_method)
        form.append('item_amount', item_amount)
        // item_amount.map((value) => form.append('item_amount', value));
        console.log(form)
        try {
          const { data } = await http(token).post(`${URL}/transactions`, form.toString())
          dispatch({
            type: 'CREATE_TRANSACTION',
            payload: data.message,
          })
          Swal.fire({
            position: 'center',
            icon: 'info',
            title:'Transactions success',
            showConfirmButton: false,
            timer: 2000,
            iconColor:'#6A4029',
          })
        } catch (err) {
          dispatch({
            type: 'CREATE_TRANSACTION_FAILED',
            payload: err.response.data.message,
          })
        }
      }

  //  export const createTransaction = (data, token) => {
  //     console.log('coba data masuk', data)
  //     return async (dispatch) => {
  //       const form = new URLSearchParams()
  //       // data.forEach((product) =>
  //       //   product
  //       //     .forEach((item) => {
  //       //       form.append('item_id', item.id)
  //       //       // form.append('item_amount', item.amount)
       
  //       //     })
  //       // )
  //       form.append('item_id', data.id)
  //       form.append('item_amount', '1')
  //       form.append('item_variant', 'item')
  //       form.append('payment_method', 'Bank')
  //       try {
  //         const { data: newData } = await http(token).post(
  //           `${URL}/transactions`,
  //           form.toString()
  //         )
  //         dispatch({
  //           type: 'CREATE_TRANSACTION',
  //           payload: newData.message,
  //         })
  //         // dispatch({
  //         //   type: 'SET_CLEAR_PRODUCTS',
  //         // })
  //       } catch (error) {
  //         dispatch({
  //           type: 'CREATE_TRANSACTION_FAILED',
  //           payload: Toast.fire({
  //             icon: 'error',
  //             title: error.response.data.message
  //           })
  //         })
  //       }
  //     }
  //   }
