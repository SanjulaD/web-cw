import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Button } from 'react-bootstrap';
import './LendMachines.css'

const LendMachines = ({ _id, name, image, targetPlant, price }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p-3 ">
                <Card.Img className="image mx-auto" src={image} variant="top" />
                <Card.Body>
                    <LinkContainer to={`/farmers/purchaseSeeds/${_id}`}>
                        <Card.Title className="title" as="div">
                            <strong>{name}</strong>
                        </Card.Title>
                    </LinkContainer>
                    <Card.Text as="p">
                        {targetPlant}
                    </Card.Text>
                    <Card.Text as="h3">
                        RS.{price}
                    </Card.Text>
                    <LinkContainer to={`/farmers/lendMachines/${_id}`}>
                        <Button varient="success">Preview here</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LendMachines
