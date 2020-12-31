import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserList from '../../components/DashBoard/UserList/UserList'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const UserListScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>AgriCom Users</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{marginLeft:"30px"}}>User List</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <UserList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserListScreen
