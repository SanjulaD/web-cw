import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Table,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listSeedProducts, deleteSeedProducts, createSeedProducts } from './../../../actions/productSeedActions'
import { SEED_CREATE_RESET } from './../../../constants/productConstants'

const SeedList = () => {

    const dispatch = useDispatch()
    let history = useHistory()

    const prodcutSeedList = useSelector(state => state.prodcutSeedList)
    const { loading: loadingSeed, error: errorSeed, productSeeds } = prodcutSeedList

    const prodcutSeedDelete = useSelector(state => state.prodcutSeedDelete)
    const { success: successSeedDelete, loading: loadingDelete, error: errorDelete } = prodcutSeedDelete

    const seedCreate = useSelector(state => state.seedCreate)
    const {
        success: successSeedCreate,
        loading: loadingCreate,
        error: errorCreate,
        product: productCreate
    } = seedCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: SEED_CREATE_RESET })
        if (!userInfo.isAdmin && !userInfo) {
            history.push('/login')
        } else {
            if (successSeedCreate) {
                history.push(`/admin/productlist/seed/${productCreate._id}/edit`)
            } else {
                dispatch(listSeedProducts())
            }
        }
    }, [dispatch, history, userInfo, successSeedDelete, successSeedCreate, productCreate])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteSeedProducts(id))
        }
    }

    const createSeedProductHandler = () => {
        dispatch(createSeedProducts())
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
            { loadingCreate && <Loader />}
            { loadingDelete && <Loader />}
            { errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            { errorDelete && <Message variant='danger'>{errorDelete}</Message>}
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
                                                <LinkContainer to={`/admin/productlist/seed/${productSeed._id}/edit`}>
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
