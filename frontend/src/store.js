import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { prodcutSeedListReducer, prodcutSeedDetailsReducer } from './reducers/productSeedReducer'
import { productLendMachinesListReducer, productLendMachinesDetailsReducer } from './reducers/productLendMachineReducer'

const reducer = combineReducers({
    prodcutSeedList: prodcutSeedListReducer,
    prodcutSeedDetails: prodcutSeedDetailsReducer,

    productLendMachinesList: productLendMachinesListReducer,
    productLendMachinesDetails: productLendMachinesDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store