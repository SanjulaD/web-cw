import {
    SUPPLIER_PRODUCT_CREATE_FAIL,
    SUPPLIER_PRODUCT_CREATE_REQUEST,
    SUPPLIER_PRODUCT_CREATE_SUCCESS,
    SUPPLIER_PRODUCT_LIST_REQUEST,
    SUPPLIER_PRODUCT_LIST_SUCCESS,
    SUPPLIER_PRODUCT_LIST_FAIL,
    SUPPLIER_PRODUCT_LIST_MY_REQUEST,
    SUPPLIER_PRODUCT_LIST_MY_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_FAIL,
    SUPPLIER_PRODUCT_REQUEST,
    SUPPLIER_PRODUCT_SUCCESS,
    SUPPLIER_PRODUCT_FAIL,
    FARMER_PRODUCT_CREATE_REVIEW_REQUEST,
    FARMER_PRODUCT_CREATE_REVIEW_SUCCESS,
    FARMER_PRODUCT_CREATE_REVIEW_FAIL,
    FARMER_PRODUCT_CREATE_REVIEW_RESET,
    SUPPLIER_PRODUCT_UPDATE_REQUEST,
    SUPPLIER_PRODUCT_UPDATE_SUCCESS,
    SUPPLIER_PRODUCT_UPDATE_FAIL,
    SUPPLIER_PRODUCT_UPDATE_RESET,
    SUPPLIER_PRODUCT_FOR_ALL_REQUEST,
    SUPPLIER_PRODUCT_FOR_ALL_SUCCESS,
    SUPPLIER_PRODUCT_FOR_ALL_FAIL
} from './../constants/supplierConstant'

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case SUPPLIER_PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case SUPPLIER_PRODUCT_CREATE_FAIL:
            return {}
        default:
            return state
    }
}

export const supplierProductListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_LIST_REQUEST:
            return {
                loading: true,
            }
        case SUPPLIER_PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }
        case SUPPLIER_PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const supplierProdictListMyReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case SUPPLIER_PRODUCT_LIST_MY_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }
        case SUPPLIER_PRODUCT_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const FarmerProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_REQUEST:
            return { loading: true, ...state }
        case SUPPLIER_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload }
        case SUPPLIER_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const farmerReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case FARMER_PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case FARMER_PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case FARMER_PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}

export const farmerProductUpdateReducer = (state = { productReviewed: {} }, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case SUPPLIER_PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case SUPPLIER_PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case SUPPLIER_PRODUCT_UPDATE_RESET:
            return {
                productReviewed: {}
            }
        default:
            return state
    }
}

// For all
export const supplierProductForAllListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_FOR_ALL_REQUEST:
            return {
                loading: true,
            }
        case SUPPLIER_PRODUCT_FOR_ALL_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }
        case SUPPLIER_PRODUCT_FOR_ALL_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}