import { combineReducers } from 'redux'
import carts from './carts'
import auth from './auth'
import items from './items'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user'
import history from './history'

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
    history

})


export default rootReducer