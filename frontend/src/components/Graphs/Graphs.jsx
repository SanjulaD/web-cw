import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import LineChart from './../DashBoard/Statistics/LineChart/LineChart'
import Bar from './../DashBoard/Statistics/BarChart/Bar'
import Doughnut from './../DashBoard/Statistics/Doughnut/Doughnut'

const Graphs = () => {
    return (
        <div style={{ marginBottom: "60px" }}>
        <h2 style={{textAlign: "center", marginTop: "50px"}}>Overall Statistics</h2>
            <Container className="mb-4">
                <Row>
                    {/* <Bar />
                    <Col md={6}>
                        <LineChart />
                    </Col>
                    <Col md={6}>
                        <Doughnut />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Graphs
