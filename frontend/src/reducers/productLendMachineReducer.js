import { 
    PRODUCT_MACHINE_LIST_REQUEST, 
    PRODUCT_MACHINE_LIST_SUCCESS, 
    PRODUCT_MACHINE_LIST_FAIL,
    PRODUCT_MACHINE_DETAILS_REQUEST, 
    PRODUCT_MACHINE_DETAILS_SUCCESS, 
    PRODUCT_MACHINE_DETAILS_FAIL,
    MACHINE_DELETE_REQUEST,
    MACHINE_DELETE_SUCCESS,
    MACHINE_DELETE_FAIL,
    MACHINE_CREATE_REQUEST,
    MACHINE_CREATE_SUCCESS,
    MACHINE_CREATE_FAIL,
    MACHINE_CREATE_RESET,
    MACHINE_UPDATE_SUCCESS,
    MACHINE_UPDATE_FAIL,
    MACHINE_UPDATE_RESET,
    MACHINE_UPDATE_REQUEST
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

export const LendMachinesCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MACHINE_CREATE_REQUEST:
            return { loading: true }
        case MACHINE_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case MACHINE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case MACHINE_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const LendMachinesUpdateReducer = (state = { machine: {} }, action) => {
    switch (action.type) {
        case MACHINE_UPDATE_REQUEST:
            return { loading: true }
        case MACHINE_UPDATE_SUCCESS:
            return { loading: false, success: true, machine: action.payload }
        case MACHINE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case MACHINE_UPDATE_RESET:
            return {
                machine: {}
            }
        default:
            return state
    }
}