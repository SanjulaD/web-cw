import axios from 'axios'
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
    SEED_UPDATE_REQUEST,
    SEED_UPDATE_FAIL,
    SEED_UPDATE_SUCCESS,
    SEED_UPDATE_RESET
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

export const deleteSeedProducts = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SEED_DELETE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        await axios.delete(`/api/seeds/${id}`, config)

        dispatch({
            type: SEED_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: SEED_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createSeedProducts = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SEED_CREATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.post(`/api/seeds`, {}, config)

        dispatch({
            type: SEED_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SEED_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateSeedProducts = (seed) => async (dispatch, getState) => {
    try {
        dispatch({ type: SEED_UPDATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`/api/seeds/${seed._id}`, seed, config)

        dispatch({
            type: SEED_UPDATE_SUCCESS,
            payload: data
        })

        dispatch({ type: SEED_UPDATE_RESET })

    } catch (error) {
        dispatch({
            type: SEED_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}