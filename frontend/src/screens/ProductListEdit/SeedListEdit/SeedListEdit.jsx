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
import { listSeedProductsDetails } from './../../../actions/productSeedActions'

const SeedListEdit = ({ history, match }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState(0)

    const productId = match.params.id

    const dispatch = useDispatch()

    const prodcutSeedDetails = useSelector(state => state.prodcutSeedDetails)
    const { loading, productSeed, error } = prodcutSeedDetails

    const seedUpdate = useSelector(state => state.seedUpdate)
    const { success } = seedUpdate

    useEffect(() => {
        if (!productSeed.name || productSeed._id !== productId) {
            dispatch(listSeedProductsDetails(productId))
        } else {
            setName(productSeed.name)
            setDescription(productSeed.description)
            setPrice(productSeed.price)
            setImage(productSeed.image)
            setCountInStock(productSeed.countInStock)
        }
    }, [history, productSeed, dispatch, productId])

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
                <h2 style={{ marginTop: '120px', textAlign: 'center' }}>Seed Profile</h2>
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
                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="price"
                                    placeholder="Enter price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='countInStock'>
                                <Form.Label>Count in stock</Form.Label>
                                <Form.Control
                                    type="countInStock"
                                    placeholder="Enter count in stock"
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
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
