import { combineReducers } from 'redux'
import carts from './carts'
import auth from './auth'
import items from './items'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user'
import chat from './chat'
import transaction from './transaction'

// const reducer = combineReducers({
//     carts,
//     auth,
//     items
// })

// export default reducer

const persistAuth = {
    key : 'auth',
    storage
}

const rootReducer = combineReducers({
    auth: persistReducer(persistAuth, auth),
    carts,
    items,
    user,
    transaction,
    chat

})


export default rootReducer