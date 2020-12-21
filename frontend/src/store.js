import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { prodcutSeedListReducer, prodcutSeedDetailsReducer } from './reducers/productSeedReducer'
import { productLendMachinesListReducer, productLendMachinesDetailsReducer } from './reducers/productLendMachineReducer'
import { cartSeedReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducer.js'
import { consumerProductListReducer } from './reducers/consumerProductsReducer'

const reducer = combineReducers({
    prodcutSeedList: prodcutSeedListReducer,
    prodcutSeedDetails: prodcutSeedDetailsReducer,

    productLendMachinesList: productLendMachinesListReducer,
    productLendMachinesDetails: productLendMachinesDetailsReducer,

    consumerProductList: consumerProductListReducer,

    cartSeed: cartSeedReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
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
    userLogin: {
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