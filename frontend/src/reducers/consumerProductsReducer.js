import {
    CONSUMER_PRODUCT_LIST_REQUEST,
    CONSUMER_PRODUCT_LIST_SUCCESS,
    CONSUMER_PRODUCT_LIST_FAIL,
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