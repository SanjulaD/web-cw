import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { prodcutSeedListReducer, prodcutSeedDetailsReducer } from './reducers/productSeedReducer'
import { productLendMachinesListReducer, productLendMachinesDetailsReducer } from './reducers/productLendMachineReducer'
import { cartSeedReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducer.js'

const reducer = combineReducers({
    prodcutSeedList: prodcutSeedListReducer,
    prodcutSeedDetails: prodcutSeedDetailsReducer,

    productLendMachinesList: productLendMachinesListReducer,
    productLendMachinesDetails: productLendMachinesDetailsReducer,

    cartSeed: cartSeedReducer,

    userLogin: userLoginReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    cartSeed: {
        cartItems: cartItemsFromStorage,
    },
    userLogin : {
        userInfo: userInfoFromStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store