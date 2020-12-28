import axios from 'axios'
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
    CONSUMER_UPDATE_REQUEST,
    CONSUMER_UPDATE_SUCCESS,
    CONSUMER_UPDATE_FAIL,
    CONSUMER_UPDATE_RESET,
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

export const listConsumerProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CONSUMER_PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/consumer/${id}`)

        dispatch({
            type: CONSUMER_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONSUMER_PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deleteConsumerProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CONSUMER_DELETE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        await axios.delete(`/api/consumer/${id}`, config)

        dispatch({
            type: CONSUMER_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: CONSUMER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createConsumer = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CONSUMER_CREATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.post(`/api/consumer/`, {}, config)

        dispatch({
            type: CONSUMER_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONSUMER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateConsumer = (consumer) => async (dispatch, getState) => {
    try {
        dispatch({ type: CONSUMER_UPDATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`/api/consumer/${consumer._id}`, consumer, config)

        dispatch({
            type: CONSUMER_UPDATE_SUCCESS,
            payload: data
        })

        dispatch({ type: CONSUMER_UPDATE_RESET })

    } catch (error) {
        dispatch({
            type: CONSUMER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}