import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Harvest from '../../components/DashBoard/Harvest/Harvest'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const HarvestScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Meta
                title="Agroic | Admin Harvest"
            />
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>Harvest</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}>Farmers Products</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <Harvest />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HarvestScreen
