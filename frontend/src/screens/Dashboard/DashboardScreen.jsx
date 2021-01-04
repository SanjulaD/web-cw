import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BarChart from '../../components/DashBoard/BarChart/Bar'
import StatCards from '../../components/DashBoard/StatCards/StatCards'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const DashboardScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>Dashboard</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{marginLeft:"30px"}}>Overall Statistics</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <StatCards />
                        <BarChart />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardScreen
