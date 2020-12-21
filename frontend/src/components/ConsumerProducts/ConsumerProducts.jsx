import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Button } from 'react-bootstrap';
import './ConsumerProduts.css'

const ConsumerProducts = ({ _id, prod_name, image, price, avalaible_location, prod_size }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p-3 ">
                <Card.Img className="image mx-auto" src={image} variant="top" />
                <Card.Body>
                    <LinkContainer to={`/consumer/${_id}`}>
                        <Card.Title className="prod-title" as="div">
                            {prod_name}
                        </Card.Title>
                    </LinkContainer>
                    <Card.Text as="h5">
                        Price: RS.{price} <br />Product Size: {prod_size}
                    </Card.Text>
                    <Card.Text as="p">
                        Location: <span style={{fontWeight:'bold'}}>{avalaible_location}</span>
                    </Card.Text><br />
                    <LinkContainer to={`/consumer/${_id}`}>
                        <Button className="btn-preview" varient="success">Preview here</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ConsumerProducts
