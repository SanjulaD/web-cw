import { 
    PRODUCT_SEED_LIST_REQUEST, 
    PRODUCT_SEED_LIST_SUCCESS, 
    PRODUCT_SEED_LIST_FAIL,
    PRODUCT_SEED_DETAILS_REQUEST, 
    PRODUCT_SEED_DETAILS_SUCCESS, 
    PRODUCT_SEED_DETAILS_FAIL  
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