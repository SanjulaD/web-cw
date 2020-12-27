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
import { listConsumerProductsDetails } from './../../../actions/consumerProductAction'

const ConsumerListEdit = ({ history, match }) => {

    const [prodName, setProdName] = useState('')
    const [image, setImage] = useState('')
    const [sellerName, setSellerName] = useState('')
    const [price, setPrice] = useState('')
    const [prodSize, setProdSize] = useState('')
    const [quantity, setQuantity] = useState('')
    const [avalaibleLoc, setAvalaibleLoc] = useState('')

    const productId = match.params.id

    const dispatch = useDispatch()

    const consumerProductDetails = useSelector(state => state.consumerProductDetails)
    const { loading, consumerProduct, error } = consumerProductDetails

    const seedUpdate = useSelector(state => state.seedUpdate)
    const { success } = seedUpdate

    useEffect(() => {
        if (!consumerProduct.prod_name || consumerProduct._id !== productId) {
            dispatch(listConsumerProductsDetails(productId))
        } else {
            setProdName(consumerProduct.prod_name)
            setSellerName(consumerProduct.seller_name)
            setPrice(consumerProduct.price)
            setImage(consumerProduct.image)
            setProdSize(consumerProduct.prod_size)
            setQuantity(consumerProduct.quantity)
            setAvalaibleLoc(consumerProduct.avalaible_location)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[history, consumerProduct, dispatch, productId])

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
                <h2 style={{ marginTop: '120px', textAlign: 'center' }}>Consumer Profile</h2>
                <Link to='/admin/productlist' className='btn btn-light my-3'>
                    GO BACK
                </Link>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Profile Updated!</Message>}
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId='prodname'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="prodName"
                                    placeholder="Enter Product Name"
                                    value={prodName}
                                    onChange={(e) => setProdName(e.target.value)}
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
                            <Form.Group controlId='sellerName'>
                                <Form.Label>Seller Name</Form.Label>
                                <Form.Control
                                    type="sellerName"
                                    placeholder="Enter seller name"
                                    value={sellerName}
                                    onChange={(e) => setSellerName(e.target.value)}
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
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId='prodSize'>
                                <Form.Label>Product Size</Form.Label>
                                <Form.Control
                                    type="prodSize"
                                    placeholder="Enter product size"
                                    value={prodSize}
                                    onChange={(e) => setProdSize(e.target.value)}
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
                            <Form.Group controlId='avalaibleLoc'>
                                <Form.Label>Machine Power</Form.Label>
                                <Form.Control
                                    type="avalaibleLoc"
                                    placeholder="Enter avalaible location"
                                    value={avalaibleLoc}
                                    onChange={(e) => setAvalaibleLoc(e.target.value)}
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

export default ConsumerListEdit 
