import { 
    PRODUCT_MACHINE_LIST_REQUEST, 
    PRODUCT_MACHINE_LIST_SUCCESS, 
    PRODUCT_MACHINE_LIST_FAIL,
    PRODUCT_MACHINE_DETAILS_REQUEST, 
    PRODUCT_MACHINE_DETAILS_SUCCESS, 
    PRODUCT_MACHINE_DETAILS_FAIL,
    MACHINE_DELETE_REQUEST,
    MACHINE_DELETE_SUCCESS,
    MACHINE_DELETE_FAIL
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

export const productLendMachinesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MACHINE_DELETE_REQUEST:
            return { loading: true }
        case MACHINE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case MACHINE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}