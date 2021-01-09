import axios from 'axios'
import {
    SUPPLIER_PRODUCT_CREATE_FAIL,
    SUPPLIER_PRODUCT_CREATE_REQUEST,
    SUPPLIER_PRODUCT_CREATE_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_REQUEST,
    SUPPLIER_PRODUCT_LIST_MY_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_FAIL,
    SUPPLIER_PRODUCT_LIST_REQUEST,
    SUPPLIER_PRODUCT_LIST_SUCCESS,
    SUPPLIER_PRODUCT_LIST_FAIL,
    SUPPLIER_PRODUCT_REQUEST,
    SUPPLIER_PRODUCT_SUCCESS,
    SUPPLIER_PRODUCT_FAIL,
    FARMER_PRODUCT_CREATE_REVIEW_REQUEST,
    FARMER_PRODUCT_CREATE_REVIEW_SUCCESS,
    FARMER_PRODUCT_CREATE_REVIEW_FAIL,
    SUPPLIER_PRODUCT_UPDATE_FAIL,
    SUPPLIER_PRODUCT_UPDATE_REQUEST,
    SUPPLIER_PRODUCT_UPDATE_SUCCESS,
    SUPPLIER_PRODUCT_FOR_ALL_REQUEST,
    SUPPLIER_PRODUCT_FOR_ALL_SUCCESS,
    SUPPLIER_PRODUCT_FOR_ALL_FAIL
} from './../constants/supplierConstant'
import { logout } from './userActions'

export const createSupplierProduct = ({
    name,
    email,
    address,
    cropSelection,
    storage,
    image,
    phonenumber,
    description
}) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_CREATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.post(
            '/api/supplier',
            {
                name,
                email,
                address,
                cropSelection,
                storage,
                image,
                phonenumber,
                description
            },
            config
        )

        dispatch({
            type: SUPPLIER_PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SUPPLIER_PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const listMyProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_LIST_MY_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/supplier/myproducts`, config)

        dispatch({
            type: SUPPLIER_PRODUCT_LIST_MY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: SUPPLIER_PRODUCT_LIST_MY_FAIL,
            payload: message,
        })
    }
}

export const listSupplierProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_LIST_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/supplier`, config)

        dispatch({
            type: SUPPLIER_PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: SUPPLIER_PRODUCT_LIST_FAIL,
            payload: message,
        })
    }
}

export const getroductsDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SUPPLIER_PRODUCT_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/supplier/product/${id}`, config)

        dispatch({
            type: SUPPLIER_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SUPPLIER_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createProductReview = (productId, review) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: FARMER_PRODUCT_CREATE_REVIEW_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/supplier/product/${productId}/reviews`, review, config)

        dispatch({
            type: FARMER_PRODUCT_CREATE_REVIEW_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: FARMER_PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        })
    }
}

export const updateReviewed = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`/api/supplier/product/${product._id}/reviews`, product, config)

        dispatch({ type: FARMER_PRODUCT_CREATE_REVIEW_SUCCESS })

        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateSupplierProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`/api/supplier/product/${product._id}/edit`, product, config)

        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SUPPLIER_PRODUCT_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// For all
export const listSupplierProductsForAll = () => async (dispatch) => {
    try {
        dispatch({
            type: SUPPLIER_PRODUCT_FOR_ALL_REQUEST,
        })

        const { data } = await axios.get(`/api/supplier/all`)

        dispatch({
            type: SUPPLIER_PRODUCT_FOR_ALL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        dispatch({
            type: SUPPLIER_PRODUCT_FOR_ALL_FAIL,
            payload: message,
        })
    }
}