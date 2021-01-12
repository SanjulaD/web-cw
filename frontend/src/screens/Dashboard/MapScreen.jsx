import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import OverLay from '../../components/DashBoard/Map/OverLay'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const MapScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Meta
                title="Agroic | Admin Map"
            />
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>Map</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}>Farmers Harvest Map</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <OverLay />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MapScreen
