import axios from 'axios'
import { 
    PRODUCT_SEED_LIST_REQUEST, 
    PRODUCT_SEED_LIST_SUCCESS, 
    PRODUCT_SEED_LIST_FAIL,
    PRODUCT_SEED_DETAILS_REQUEST, 
    PRODUCT_SEED_DETAILS_SUCCESS, 
    PRODUCT_SEED_DETAILS_FAIL 
} from './../constants/productConstants.js'

export const listSeedProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SEED_LIST_REQUEST })

        const { data } = await axios.get('/api/seeds')

        dispatch({
            type: PRODUCT_SEED_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_SEED_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const listSeedProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SEED_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/seeds/${id}`)

        dispatch({
            type: PRODUCT_SEED_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_SEED_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}