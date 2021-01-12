import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EditProfile from '../../components/DashBoard/Profile/EditProfile'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const ProfileScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Meta
                title="Agroic | Admin Profile"
            />
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>Admin Profile</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}>Edit Profile</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <EditProfile />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileScreen
