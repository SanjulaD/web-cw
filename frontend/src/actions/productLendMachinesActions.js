import axios from 'axios'
import {
    PRODUCT_MACHINE_LIST_REQUEST,
    PRODUCT_MACHINE_LIST_SUCCESS,
    PRODUCT_MACHINE_LIST_FAIL,
    PRODUCT_MACHINE_DETAILS_REQUEST,
    PRODUCT_MACHINE_DETAILS_SUCCESS,
    PRODUCT_MACHINE_DETAILS_FAIL
} from './../constants/productConstants.js'

export const listLendMachineProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_MACHINE_LIST_REQUEST })

        const { data } = await axios.get('/api/lendMachines')

        dispatch({
            type: PRODUCT_MACHINE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_MACHINE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const listLendMachineProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_MACHINE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/lendMachines/${id}`)

        dispatch({
            type: PRODUCT_MACHINE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_MACHINE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}