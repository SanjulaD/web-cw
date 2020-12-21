import axios from 'axios'
import {
    CONSUMER_PRODUCT_LIST_REQUEST,
    CONSUMER_PRODUCT_LIST_SUCCESS,
    CONSUMER_PRODUCT_LIST_FAIL,
} from './../constants/productConstants'

export const listConsumerProducts = () => async (dispatch) => {
    try {
        dispatch({ type: CONSUMER_PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/consumer')

        dispatch({
            type: CONSUMER_PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONSUMER_PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}