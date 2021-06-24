import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { persistStore } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(
//             thunk,
//             logger
//         )
//     )
// )

// export default store

const reduxConfig = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                thunk,
                logger
            )
        )
    )
    const persistor = persistStore(store)
    return { store, persistor }
}

export default reduxConfig