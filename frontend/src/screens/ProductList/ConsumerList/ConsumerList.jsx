import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Table,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listConsumerProducts, deleteConsumerProduct } from './../../../actions/consumerProductAction'

const ConsumerList = ({ history }) => {

    const dispatch = useDispatch()

    const consumerProductList = useSelector(state => state.consumerProductList)
    const { loading: loadingConsumer, error: errorConsumer, consumerProducts } = consumerProductList

    const consumerProductDelete = useSelector(state => state.consumerProductDelete)
    const { loading: deleteLoadingConsumer, error: errorDeleteConsumer, success: successDelete } = consumerProductDelete

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listConsumerProducts())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteConsumerProduct(id))
        }
    }

    const createConsumerProductHandler = (seedProduct) => {
        // CREATE PRODUCT
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ marginBottom: '20px' }}>Consumer</h1>
                </Col>
                <Col className="text-right">
                    <Button className='my-3' onClick={createConsumerProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            { deleteLoadingConsumer && <Loader />}
            { errorDeleteConsumer && <Message variant='danger'>{errorDeleteConsumer}</Message>}
            {loadingConsumer ? <Loader />
                : errorConsumer ? <Message variant='danger'>{errorConsumer}</Message>
                    : (
                        <Table style={{ marginBottom: '50px' }} striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>SELLER NAME</td>
                                    <td>PRODUCT NAME</td>
                                    <td>AVALAIBLE LOCATION</td>
                                    <td>EDIT / DELETE</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    consumerProducts.map(consumer => (
                                        <tr key={consumer._id}>
                                            <td>{consumer._id}</td>
                                            <td>{consumer.seller_name}</td>
                                            <td>{consumer.prod_name}</td>
                                            <td>{consumer.avalaible_location}</td>
                                            <td>
                                                <LinkContainer to={`/admin/user/productlist/consumer/${consumer._id}/edit`}>
                                                    <Button variant="light" className="btn btn-sm">
                                                        <i className="fas fa-edit"></i>
                                                    </Button>
                                                </LinkContainer>
                                                <Button
                                                    variant="danger"
                                                    className="btn-sm mr-2"
                                                    onClick={() => deleteHandler(consumer._id)}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    )
            }
        </Container>
    )
}

export default ConsumerList
