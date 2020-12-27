import React, { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import FormContainer from './../../../components/FormContainer/FormContainer'
import { listLendMachineProductsDetails } from './../../../actions/productLendMachinesActions'

const SeedListEdit = ({ history, match }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [targetPlant, setTargetPlant] = useState('')
    const [quantity, setQuantity] = useState('')
    const [machinePower, setMachinePower] = useState('')

    const productId = match.params.id

    const dispatch = useDispatch()

    const productLendMachinesDetails = useSelector(state => state.productLendMachinesDetails)
    const { loading, productLendMachines, error } = productLendMachinesDetails

    const seedUpdate = useSelector(state => state.seedUpdate)
    const { success } = seedUpdate

    useEffect(() => {
        if (!productLendMachines.name || productLendMachines._id !== productId) {
            dispatch(listLendMachineProductsDetails(productId))
        } else {
            setName(productLendMachines.name)
            setDescription(productLendMachines.description)
            setPrice(productLendMachines.price)
            setImage(productLendMachines.image)
            setTargetPlant(productLendMachines.target_plant)
            setQuantity(productLendMachines.quantity)
            setMachinePower(productLendMachines.machine_power)
        }
    }, [history, productLendMachines, dispatch, productId])

    const submitHandler = (e) => {
        e.preventDefault()
        // if (password !== confirmPassword) {
        //     setMessage('Passwords do not match')
        // } else {
        //     dispatch(updateUserProfile({ id: user._id, name, email, password, cropSelection }))
        // }
    }

    return (
        <Container style={{ marginBottom: '50px' }}>
            <FormContainer>
                <h2 style={{ marginTop: '120px', textAlign: 'center' }}>Lend Machine Profile</h2>
                <Link to='/admin/productlist' className='btn btn-light my-3'>
                    GO BACK
                </Link>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Profile Updated!</Message>}
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter image url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="price"
                                    placeholder="Enter price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    type="description"
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId='countInStock'>
                                <Form.Label>Target Plant</Form.Label>
                                <Form.Control
                                    type="countInStock"
                                    placeholder="Enter target plant"
                                    value={targetPlant}
                                    onChange={(e) => setTargetPlant(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='quantity'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="countInStock"
                                    placeholder="Enter qunatity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='machinepower'>
                                <Form.Label>Machine Power</Form.Label>
                                <Form.Control
                                    type="machinepower"
                                    placeholder="Enter machine power"
                                    value={machinePower}
                                    onChange={(e) => setMachinePower(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="primary">Update</Button>
                        </Col>
                    </Row>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default SeedListEdit 
