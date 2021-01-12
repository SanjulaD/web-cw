import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Button } from 'react-bootstrap';
import './PurchaseSeeds.css'
import Rating from '../Rating/Rating';

const PurchaseSeeds = ({ _id, name, rating, image, reviews, price }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p-3 ">
                <Card.Img className="image card-image mx-auto" src={image} variant="top" />
                <Card.Body>
                    <LinkContainer to={`/farmers/purchaseSeeds/${_id}`}>
                        <Card.Title className="title">
                            <strong>{name}</strong>
                        </Card.Title>
                    </LinkContainer>
                    <Card.Text>
                        <Rating
                            value={rating}
                            text={`${reviews} reviews`}
                        />
                    </Card.Text>
                    <Card.Text>
                        <h4>RS.{price}</h4>
                    </Card.Text>
                    <LinkContainer to={`/farmers/purchaseSeeds/${_id}`}>
                        <Button className="btn-preview" varient="success">Preview here</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PurchaseSeeds
