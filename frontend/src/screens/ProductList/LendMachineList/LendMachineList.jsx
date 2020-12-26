import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Table,
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { listLendMachineProducts, deleteLendMachineProduct } from './../../../actions/productLendMachinesActions'

const SeedList = ({ history }) => {

    const dispatch = useDispatch()

    const productLendMachinesList = useSelector(state => state.productLendMachinesList)
    const { loading: loadingMachine, error: errorMachine, productLendMachines } = productLendMachinesList

    const productLendMachinesDelete = useSelector(state => state.productLendMachinesDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productLendMachinesDelete

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listLendMachineProducts())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteLendMachineProduct(id))
        }
    }

    const createMachineProductHandler = (machine) => {
        //  CREATE MACHINE PRODUCT
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ marginBottom: '20px' }}>Consumer</h1>
                </Col>
                <Col className="text-right">
                    <Button className='my-3' onClick={createMachineProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            { loadingDelete && <Loader />}
            { errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingMachine ? <Loader />
                : errorMachine ? <Message variant='danger'>{errorMachine}</Message>
                    : (
                        <Table style={{ marginBottom: '50px' }} striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>NAME</td>
                                    <td>TARGET PLANT</td>
                                    <td>MACHINE POWER</td>
                                    <td>EDIT / DELETE</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productLendMachines.map(machine => (
                                        <tr key={machine._id}>
                                            <td>{machine._id}</td>
                                            <td>{machine.name}</td>
                                            <td>{machine.target_plant}</td>
                                            <td>{machine.machine_power}</td>
                                            <td>
                                                <LinkContainer to={`/admin/user/productlist/machine/${machine._id}/edit`}>
                                                    <Button variant="light" className="btn btn-sm">
                                                        <i className="fas fa-edit"></i>
                                                    </Button>
                                                </LinkContainer>
                                                <Button
                                                    variant="danger"
                                                    className="btn-sm mr-2"
                                                    onClick={() => deleteHandler(machine._id)}
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
