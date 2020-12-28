import {
    CONSUMER_PRODUCT_LIST_REQUEST,
    CONSUMER_PRODUCT_LIST_SUCCESS,
    CONSUMER_PRODUCT_LIST_FAIL,
    CONSUMER_PRODUCT_DETAILS_REQUEST,
    CONSUMER_PRODUCT_DETAILS_SUCCESS,
    CONSUMER_PRODUCT_DETAILS_FAIL,
    CONSUMER_DELETE_REQUEST,
    CONSUMER_DELETE_SUCCESS,
    CONSUMER_DELETE_FAIL,
    CONSUMER_CREATE_REQUEST,
    CONSUMER_CREATE_SUCCESS,
    CONSUMER_CREATE_FAIL,
    CONSUMER_CREATE_RESET,
    CONSUMER_UPDATE_REQUEST,
    CONSUMER_UPDATE_SUCCESS,
    CONSUMER_UPDATE_FAIL,
    CONSUMER_UPDATE_RESET
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

export const consumerProductDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSUMER_DELETE_REQUEST:
            return { loading: true }
        case CONSUMER_DELETE_SUCCESS:
            return { loading: false, success: true }
        case CONSUMER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const consumerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSUMER_CREATE_REQUEST:
            return { loading: true }
        case CONSUMER_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case CONSUMER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case CONSUMER_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const consumerUpdateReducer = (state = { consumer: {} }, action) => {
    switch (action.type) {
        case CONSUMER_UPDATE_REQUEST:
            return { loading: true }
        case CONSUMER_UPDATE_SUCCESS:
            return { loading: false, success: true, consumer: action.payload }
        case CONSUMER_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case CONSUMER_UPDATE_RESET:
            return {
                consumer: {}
            }
        default:
            return state
    }
}