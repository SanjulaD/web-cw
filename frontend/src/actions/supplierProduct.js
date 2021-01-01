import axios from 'axios'
import {
    SUPPLIER_PRODUCT_CREATE_FAIL,
    SUPPLIER_PRODUCT_CREATE_REQUEST,
    SUPPLIER_PRODUCT_CREATE_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_REQUEST,
    SUPPLIER_PRODUCT_LIST_MY_SUCCESS,
    SUPPLIER_PRODUCT_LIST_MY_FAIL
} from './../constants/supplierConstant'
import { logout } from './userActions'

export const createSupplierProduct = ({ name, address, email, image, cropSelection, description }) => async (dispatch, getState) => {
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
            { name, email, address, image, cropSelection, description },
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