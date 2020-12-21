import {
    CONSUMER_PRODUCT_LIST_REQUEST,
    CONSUMER_PRODUCT_LIST_SUCCESS,
    CONSUMER_PRODUCT_LIST_FAIL,
    CONSUMER_PRODUCT_DETAILS_REQUEST,
    CONSUMER_PRODUCT_DETAILS_SUCCESS,
    CONSUMER_PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const consumerProductListReducer = (state = { consumerProducts: [] }, action) => {
    switch (action.type) {
        case CONSUMER_PRODUCT_LIST_REQUEST:
            return { loading: true, consumerProducts: [] }
        case CONSUMER_PRODUCT_LIST_SUCCESS:
            return { loading: false, consumerProducts: action.payload }
        case CONSUMER_PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const consumerProductDetailsReducer = (state = { consumerProduct: { reviews: [] } }, action) => {
    switch (action.type) {
        case CONSUMER_PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case CONSUMER_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, consumerProduct: action.payload }
        case CONSUMER_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}