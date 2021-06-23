import { combineReducers } from "redux"
import carts from './carts'
import auth from './auth'
import items from './items'

const reducer = combineReducers({
    carts,
    auth,
    items
})

export default reducer