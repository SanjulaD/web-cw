import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Table,
    Button,
    Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import { listUsers, deleteUsers } from './../../actions/userActions'

const UserListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    
    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')) {
            dispatch(deleteUsers(id))
        }
    }

    return (
        <div style={{ marginTop: '120px' }}>
            <Container>
                <h1 style={{textAlign: "center", marginBottom: '20px'}}>Users</h1>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <Table style={{marginBottom: '223px'}} striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>NAME</td>
                                        <td>CROP SELECTION</td>
                                        <td>EMAIL / NIC</td>
                                        <td>ADMIN</td>
                                        <td>EDIT / DELETE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => (
                                            <tr key={user._id}>
                                                <td>{user._id}</td>
                                                <td>{user.name}</td>
                                                {
                                                    user.cropSelection 
                                                    ? <td>{user.cropSelection}</td>
                                                    : <td style={{color: 'red'}}>No Crop Selected</td>
                                                }
                                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                                <td>
                                                    {
                                                        user.isAdmin ? (
                                                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                                                        ) : <i className="fas fa-times" style={{ color: 'red' }}></i>
                                                    }
                                                </td>
                                                <td>
                                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                        <Button variant="light" className="btn btn-sm">
                                                            <i className="fas fa-edit"></i>
                                                        </Button>
                                                    </LinkContainer>
                                                    <Button
                                                        variant="danger"
                                                        className="btn-sm mr-2"
                                                        onClick={() => deleteHandler(user._id)}
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
        </div>
    )
}

export default UserListScreen
