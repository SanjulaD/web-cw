import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './FarmerStyle.css'

const FarmerScreen = () => {
    return (
        <div>
            <Container>
                <Row className="row-one">
                    <Col>
                        <Card bg="success" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Purchase Seeds, Pesticides & Fertilizer</Card.Title>
                                <LinkContainer to="/farmers/purchaseSeeds">
                                    <Button>Explore More</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="success" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Sell Your Producing Material through Us</Card.Title>
                                <LinkContainer to="/login?redirect=sellProducts">
                                    <Button>Explore More</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card bg="success" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Lend All of Heavy Machine And Tractros</Card.Title>
                                <LinkContainer to="/farmers/lendMachines">
                                    <Button>Explore More</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="success" border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Twa monhri danna</Card.Title>
                                <LinkContainer to="/farmers/...">
                                    <Button>Explore More</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}

export default FarmerScreen
