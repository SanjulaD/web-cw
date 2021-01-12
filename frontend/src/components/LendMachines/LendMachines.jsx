import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Button } from 'react-bootstrap';
import './LendMachines.css'

const LendMachines = ({ _id, name, image, targetPlant, price }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p-3">
                <Card.Img className="image card-image mx-auto" src={image} variant="top" />
                <Card.Body>
                    <LinkContainer to={`/farmers/lendMachines/${_id}`}>
                        <Card.Title className="title">
                            <strong>{name}</strong>
                        </Card.Title>
                    </LinkContainer>
                    <Card.Text>
                        <span style={{fontWeight:"bold"}}>Target Plants </span><br /> {targetPlant}
                    </Card.Text>
                    <Card.Text>
                        <h3>RS.{price}</h3>
                    </Card.Text>
                    <LinkContainer to={`/farmers/lendMachines/${_id}`}>
                        <Button className="btn-preview" varient="success">Preview here</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LendMachines
