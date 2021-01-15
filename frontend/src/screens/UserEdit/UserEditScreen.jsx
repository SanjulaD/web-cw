import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import FormContainer from '../../components/FormContainer/FormContainer'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from './../../constants/userConstants'
import Meta from '../../components/Helmet/Meta'

const UserEditScreen = ({ match, history }) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/userList')
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setCropSelection(user.cropSelection)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [user, userId, dispatch, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }

    return (
        <>
            <Meta
                title="Agroic | Admin User Edit"
            />
            <FormContainer>
                <h1 style={{ marginTop: '120px' }}>Edit User</h1>
                <Link to='/admin/userList' className="btn btn-light my-2">GO BACK</Link>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler} style={{ marginBottom: '50px' }}>
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
                            <Form.Group controlId='isAdmin'>
                                <Form.Check
                                    type="checkbox"
                                    label="Is Admin"
                                    value={isAdmin}
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                ></Form.Check>
                            </Form.Group>
                            <Button type="submit" variant="primary">Update</Button>
                        </Form>
                    )
                }
            </FormContainer>
        </>
    )
}

export default UserEditScreen
