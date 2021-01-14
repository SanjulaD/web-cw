import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import FormContainer from '../FormContainer/FormContainer'
import { register } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const Register = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password, cropSelection))
        }
    }

    return (

        <FormContainer>
            <Meta
                title="Agroic | Register"
            />
            <h1 style={{ marginTop: '120px' }}>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
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
                        <Form.Group controlId='cropSelection'>
                            <Form.Label>Crop Selection (optional)</Form.Label>
                            <Form.Control
                                type="cropSelection"
                                placeholder="Enter crop               "
                                value={cropSelection}
                                onChange={(e) => setCropSelection(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId='password'>
                            <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm password <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">Register</Button>
                    </Col>
                </Row>
            </Form>
            <Row className='py-3'>
                <Col style={{ marginBottom: '30px' }}>
                    Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Register
