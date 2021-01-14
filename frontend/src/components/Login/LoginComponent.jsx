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
import { login } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const LoginComponent = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <Meta
                title="Agroic | Sign In"
            />
            <h1 style={{ marginTop: '120px' }}>Sign In</h1>
            { error && <Message variant='danger'>{error}</Message>}
            { loading && <Loader />}
            <Form onSubmit={submitHandler}>
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
                <Button type="submit" variant="primary">Sign In</Button>
            </Form>
            <Row className='py-3'>
                <Col style={{ marginBottom: '30px' }}>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginComponent
