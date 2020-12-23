import React, { useEffect } from 'react'
import {
    Container,
    Row,
    Col,
    ListGroup,
    Image,
    Card
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import { getOrderDetails } from './../../actions/orderAction'

const OrderScreen = ({ match }) => {

    const orderId = match.params.id

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cartSeed)
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)

    const orderDetails = useSelector(state => state.orderDetails)

    const { order, loading, error } = orderDetails



    useEffect(() => {
        dispatch(getOrderDetails(orderId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : error ? <Message variant="danger">{error}</Message>
                        : (
                            <Container style={{ marginTop: '120px' }}>
                                <h2>Order {order._id}</h2>
                                <Row>
                                    <Col md={8}>
                                        <ListGroup variant='flush' className="mb-3">
                                            <ListGroup.Item>
                                                <h1>Shipping</h1>
                                                <p>
                                                    <strong>Name: </strong>{order.user.name}
                                                </p>
                                                <p>
                                                    <strong>Email: </strong>
                                                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                                                </p>
                                                <p>
                                                    <strong>Address : </strong>
                                                    {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                                                    {order.shippingAddress.postalCode},{' '}
                                                    {order.shippingAddress.country}
                                                </p>
                                                {order.isDelivered
                                                    ? <Message variant="success">Delivered on {order.deliveredAt}</Message>
                                                    : <Message variant="danger">Not Delivered</Message>
                                                }
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h2>Payment Method</h2>
                                                <p>
                                                    <strong>Method : </strong>
                                                    {order.paymentMethod}
                                                </p>
                                                {order.isPaid
                                                    ? <Message variant="success">Paid on {order.paidAt}</Message>
                                                    : <Message variant="danger">Not Paid</Message>
                                                }
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h2>Order Items</h2>
                                                {order.length === 0
                                                    ? <Message>Order is empty</Message>
                                                    : (
                                                        <ListGroup variant="flush">
                                                            {
                                                                order.orderItems.map((item, index) => (
                                                                    <ListGroup.Item key={index}>
                                                                        <Row>
                                                                            <Col md={1}>
                                                                                <Image src={item.image} alt={item.name} fluid rounded />
                                                                            </Col>
                                                                            <Col>
                                                                                {item.name}
                                                                            </Col>
                                                                            <Col md={4}>
                                                                                {`${item.qty} x RS. ${item.price} = RS. ${item.qty * item.price}`}
                                                                            </Col>
                                                                        </Row>
                                                                    </ListGroup.Item>
                                                                ))
                                                            }
                                                        </ListGroup>
                                                    )
                                                }
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Card>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <h2>Order Summary</h2>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Total Price</Col>
                                                        <Col>{`RS. ${cart.itemsPrice}`}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Shipping</Col>
                                                        <Col>{`RS. ${order.shippingPrice}`}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Tax</Col>
                                                        <Col>{`RS. ${order.taxPrice}`}</Col>
                                                    </Row>
                                                </ListGroup.Item><ListGroup.Item>
                                                    <Row>
                                                        <Col>Total</Col>
                                                        <Col>{`RS. ${order.totalPrice}`}</Col>
                                                    </Row>
                                                </ListGroup.Item>

                                            </ListGroup>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        )
            }
        </div>
    )
}

export default OrderScreen
