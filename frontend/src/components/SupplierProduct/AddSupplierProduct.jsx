import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Form,
    Button,
    Row,
    Col,
    Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Message from './../../components/Message/Message'
import Loader from './../../components/Loader/Loader'
import { createSupplierProduct } from '../../actions/supplierProduct'

const AddSupplierProduct = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [description, setDescription] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [storage, setStorage] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()
    let history = useHistory()

    const productCreate = useSelector(state => state.productCreate)
    const { loading, success, error } = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [userInfo, history, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createSupplierProduct({
            name,
            email,
            address,
            cropSelection,
            storage,
            image,
            phonenumber,
            description,
        })
        )

        setName('')
        setEmail('')
        setImage('')
        setAddress('')
        setCropSelection('')
        setPhonenumber('')
        setStorage('')
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)

        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    return (
        <Container>
            {success && <Message variant='success'>Your product has been submitted</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={5}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address / NIC <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="nic"
                                placeholder="Enter email or NIC"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='address'>
                            <Form.Label>Address <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="address"
                                as="textarea" rows={1}
                                placeholder="Enter address"
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='cropSelection'>
                            <Form.Label>Crop Selection <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="cropSelection"
                                placeholder="Enter crop selection"
                                value={cropSelection}
                                required
                                onChange={(e) => setCropSelection(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='storage'>
                            <Form.Label>Product Size <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="storage"
                                placeholder="Enter size (kg)"
                                value={storage}
                                required
                                onChange={(e) => setStorage(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group controlId='image'>
                            <Form.Label>Image <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image url"
                                value={image}
                                required
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>
                        <Form.Group controlId='phonenumber'>
                            <Form.Label>Phone Number <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="phonenumber"
                                placeholder="Enter phonenumber"
                                value={phonenumber}
                                required
                                onChange={(e) => setPhonenumber(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.Label>Description <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                type="description"
                                placeholder="Enter description"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <br />
                        <Button type="submit" variant="primary">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default AddSupplierProduct

