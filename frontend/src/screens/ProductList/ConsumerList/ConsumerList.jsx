import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Table,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listConsumerProducts, deleteConsumerProduct, createConsumer } from './../../../actions/consumerProductAction'
import { CONSUMER_CREATE_RESET } from './../../../constants/productConstants'

const ConsumerList = () => {

    const dispatch = useDispatch()
    let history = useHistory()

    const consumerProductList = useSelector(state => state.consumerProductList)
    const { loading: loadingConsumer, error: errorConsumer, consumerProducts } = consumerProductList

    const consumerProductDelete = useSelector(state => state.consumerProductDelete)
    const { loading: deleteLoadingConsumer, error: errorDeleteConsumer, success: successDelete } = consumerProductDelete

    const consumerCreate = useSelector(state => state.consumerCreate)
    const {
        loading: createLoadingConsumer,
        error: errorcreateConsumer,
        success: successCreate,
        product: consumerProduct
    } = consumerCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: CONSUMER_CREATE_RESET })
        if (!userInfo.isAdmin && !userInfo) {
            history.push('/login')
        } else {
            if (successCreate) {
                history.push(`/admin/productlist/consumer/${consumerProduct._id}/edit`)
            } else {
                dispatch(listConsumerProducts())
            }
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, consumerProduct])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteConsumerProduct(id))
        }
    }

    const createConsumerProductHandler = () => {
        dispatch(createConsumer())
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
            { createLoadingConsumer && <Loader />}
            { errorcreateConsumer && <Message variant='danger'>{errorcreateConsumer}</Message>}
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
                                                <LinkContainer to={`/admin/productlist/consumer/${consumer._id}/edit`}>
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
