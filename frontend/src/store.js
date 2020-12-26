import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { prodcutSeedListReducer, prodcutSeedDetailsReducer, prodcutSeedDeleteReducer } from './reducers/productSeedReducer'
import { productLendMachinesListReducer, productLendMachinesDetailsReducer, productLendMachinesDeleteReducer } from './reducers/productLendMachineReducer'
import { cartSeedReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListeReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducer.js'
import { consumerProductListReducer, consumerProductDetailsReducer, consumerProductDeleteReducer } from './reducers/consumerProductsReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    prodcutSeedList: prodcutSeedListReducer,
    prodcutSeedDetails: prodcutSeedDetailsReducer,
    prodcutSeedDelete: prodcutSeedDeleteReducer,

    productLendMachinesList: productLendMachinesListReducer,
    productLendMachinesDetails: productLendMachinesDetailsReducer,
    productLendMachinesDelete: productLendMachinesDeleteReducer,

    consumerProductList: consumerProductListReducer,
    consumerProductDetails: consumerProductDetailsReducer,
    consumerProductDelete: consumerProductDeleteReducer,

    cartSeed: cartSeedReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListeReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cartSeed: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
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