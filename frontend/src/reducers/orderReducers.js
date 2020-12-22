import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SAVE,
    ORDER_CREATE_FAIL
} from '../constants/orderConstant'

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SAVE:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}