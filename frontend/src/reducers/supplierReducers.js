import {
    SUPPLIER_PRODUCT_CREATE_FAIL,
    SUPPLIER_PRODUCT_CREATE_REQUEST,
    SUPPLIER_PRODUCT_CREATE_SUCCESS,
    SUPPLIER_PRODUCT_LIST_REQUEST,
    SUPPLIER_PRODUCT_LIST_SUCCESS,
    SUPPLIER_PRODUCT_LIST_FAIL,
    SUPPLIER_PRODUCT_LIST_MY_REQUEST,
    SUPPLIER_PRODUCT_LIST_MY_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_FAIL
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