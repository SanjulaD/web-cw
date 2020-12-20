import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="main-title">COMPREHENSIVE SERVICES</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis
            </p>
            <Container className="services">
                <Row>
                    <Col md={3}>
                        <h5 className="sub-title">Heavy Machine</h5>
                        <Image className="img" src="images/services/heavy.svg" fluid />
                        <p className="sub-desc">No need to worry of labour costing more. Just rent all types of machine here!!</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Gardening Kits</h5>
                        <Image className="img" src="images/services/gardening.svg" fluid />
                        <p className="sub-desc">We provides all of the gardening related products i.e seeds, pestisides and heavy machine.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Supplier</h5>
                        <Image className="img" src="images/services/supplier.svg" fluid />
                        <p className="sub-desc">Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Consumer</h5>
                        <Image className="img" src="images/services/consumer.svg" fluid />
                        <p className="sub-desc">Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OurServices
