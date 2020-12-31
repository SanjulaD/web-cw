import React, { useEffect } from 'react'
import {
    Table,
    Container,
    Button
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listOrders } from './../../../actions/orderAction'

const OrderListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <div style={{ marginTop: '10px' }}>
            <Container>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <Table style={{ marginBottom: '223px' }} striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>USER</td>
                                        <td>DATE</td>
                                        <td>TOTAL PRICE</td>
                                        <td>PAID</td>
                                        <td>DELIVERED</td>
                                        <td>MORE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => (
                                            <tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.user && order.user.name}</td>
                                                <td>{order.createdAt.substring(0, 10)}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>
                                                    {order.isPaid ? (
                                                        order.paidAt.substring(0, 10)
                                                    ) : (
                                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                        )
                                                    }
                                                </td>
                                                <td>
                                                    {order.isDelivered ? (
                                                        order.paidAt.substring(0, 10)
                                                    ) : (
                                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                        )}
                                                </td>
                                                <td>
                                                    <LinkContainer to={`/order/${order._id}/edit`}>
                                                        <Button varinat='light' className='btn-sm'>
                                                            Details
                                                        </Button>
                                                    </LinkContainer>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        )
                }
            </Container>
        </div>
    )
}

export default OrderListScreen
