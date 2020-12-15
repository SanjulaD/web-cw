import { 
    PRODUCT_MACHINE_LIST_REQUEST, 
    PRODUCT_MACHINE_LIST_SUCCESS, 
    PRODUCT_MACHINE_LIST_FAIL,
    PRODUCT_MACHINE_DETAILS_REQUEST, 
    PRODUCT_MACHINE_DETAILS_SUCCESS, 
    PRODUCT_MACHINE_DETAILS_FAIL  
} from './../constants/productConstants.js'

export const productLendMachinesListReducer = (state = { productLendMachines: [] }, action) => {
    switch (action.type) {
        case PRODUCT_MACHINE_LIST_REQUEST:
            return { loading: true, productLendMachines: [] }
        case PRODUCT_MACHINE_LIST_SUCCESS:
            return { loading: false, productLendMachines: action.payload }
        case PRODUCT_MACHINE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productLendMachinesDetailsReducer = (state = { productLendMachines: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_MACHINE_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_MACHINE_DETAILS_SUCCESS:
            return { loading: false, productLendMachines: action.payload }
        case PRODUCT_MACHINE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}