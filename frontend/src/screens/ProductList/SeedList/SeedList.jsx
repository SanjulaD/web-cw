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
import { listSeedProducts } from './../../../actions/productSeedActions'

const SeedList = ({ history }) => {

    const dispatch = useDispatch()

    const prodcutSeedList = useSelector(state => state.prodcutSeedList)
    const { loading: loadingSeed, error: errorSeed, productSeeds } = prodcutSeedList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listSeedProducts())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            // Product delte
        }
    }

    const createSeedProductHandler = (seedProduct) => {
        // CREATE PRODUCT
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ marginBottom: '20px' }}>Seeds</h1>
                </Col>
                <Col className="text-right">
                    <Button className='my-3' onClick={createSeedProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            {loadingSeed ? <Loader />
                : errorSeed ? <Message variant='danger'>{errorSeed}</Message>
                    : (
                        <Table style={{ marginBottom: '50px' }} striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>NAME</td>
                                    <td>CATEGORY</td>
                                    <td>PRICE</td>
                                    <td>EDIT / DELETE</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productSeeds.map(productSeed => (
                                        <tr key={productSeed._id}>
                                            <td>{productSeed._id}</td>
                                            <td>{productSeed.name}</td>
                                            <td>{productSeed.category}</td>
                                            <td>{productSeed.price}</td>
                                            <td>
                                                <LinkContainer to={`/admin/user/productlist/${productSeed._id}/edit`}>
                                                    <Button variant="light" className="btn btn-sm">
                                                        <i className="fas fa-edit"></i>
                                                    </Button>
                                                </LinkContainer>
                                                <Button
                                                    variant="danger"
                                                    className="btn-sm mr-2"
                                                    onClick={() => deleteHandler(productSeed._id)}
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

export default SeedList
