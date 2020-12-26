import axios from 'axios'
import {
    PRODUCT_MACHINE_LIST_REQUEST,
    PRODUCT_MACHINE_LIST_SUCCESS,
    PRODUCT_MACHINE_LIST_FAIL,
    PRODUCT_MACHINE_DETAILS_REQUEST,
    PRODUCT_MACHINE_DETAILS_SUCCESS,
    PRODUCT_MACHINE_DETAILS_FAIL,
    MACHINE_DELETE_REQUEST,
    MACHINE_DELETE_SUCCESS,
    MACHINE_DELETE_FAIL
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

export const deleteLendMachineProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MACHINE_DELETE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        await axios.delete(`/api/lendMachines/${id}`, config)

        dispatch({
            type: MACHINE_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: MACHINE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}