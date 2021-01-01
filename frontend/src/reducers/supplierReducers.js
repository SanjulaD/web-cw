import {
    SUPPLIER_PRODUCT_CREATE_FAIL,
    SUPPLIER_PRODUCT_CREATE_REQUEST,
    SUPPLIER_PRODUCT_CREATE_SUCCESS
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