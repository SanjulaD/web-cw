import {
    PRODUCT_SEED_LIST_REQUEST,
    PRODUCT_SEED_LIST_SUCCESS,
    PRODUCT_SEED_LIST_FAIL,
    PRODUCT_SEED_DETAILS_REQUEST,
    PRODUCT_SEED_DETAILS_SUCCESS,
    PRODUCT_SEED_DETAILS_FAIL,
    SEED_DELETE_REQUEST,
    SEED_DELETE_SUCCESS,
    SEED_DELETE_FAIL,
    SEED_CREATE_REQUEST,
    SEED_CREATE_SUCCESS,
    SEED_CREATE_FAIL,
    SEED_CREATE_RESET
} from './../constants/productConstants.js'

export const prodcutSeedListReducer = (state = { productSeeds: [] }, action) => {
    switch (action.type) {
        case PRODUCT_SEED_LIST_REQUEST:
            return { loading: true, productSeeds: [] }
        case PRODUCT_SEED_LIST_SUCCESS:
            return { loading: false, productSeeds: action.payload }
        case PRODUCT_SEED_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const prodcutSeedDetailsReducer = (state = { productSeed: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_SEED_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_SEED_DETAILS_SUCCESS:
            return { loading: false, productSeed: action.payload }
        case PRODUCT_SEED_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const prodcutSeedDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SEED_DELETE_REQUEST:
            return { loading: true }
        case SEED_DELETE_SUCCESS:
            return { loading: false, success: true }
        case SEED_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const seedCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SEED_CREATE_REQUEST:
            return { loading: true }
        case SEED_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case SEED_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case SEED_CREATE_RESET:
            return {}
        default:
            return state
    }
}