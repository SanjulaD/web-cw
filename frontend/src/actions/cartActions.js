import axios from 'axios'
import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESSS,
    CART_SAVE_PAYMENT_METHOD
} from './../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/seeds/${id}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                seed: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            }
        })
    } catch (error) {
        try {
            const { data } = await axios.get(`/api/lendMachines/${id}`)
            dispatch({
                type: CART_ADD_ITEM,
                payload: {
                    seed: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.quantity,
                    qty,
                }
            })
        } catch (error) { 
            const { data } = await axios.get(`/api/consumer/${id}`)
            dispatch({
                type: CART_ADD_ITEM,
                payload: {
                    seed: data._id,
                    name: data.prod_name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.quantity,
                    qty,
                }
            })
        }
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cartSeed.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartSeed.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESSS,
        payload: data
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}