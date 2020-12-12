import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import { 
    Col, 
    Container, 
    Row, 
    Image, 
    ListGroup, 
    Card, 
    Button } from 'react-bootstrap';
import Seeds from '../../data/seeds';
import './SeedProduct.css'

const SeedProductScreen = ({ match }) => {

    const product = Seeds.find(p => p._id === match.params.id)

    return (
        <div className="productScreen">
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/farmers/purchaseSeeds">GO BACK</Link>
                <Row className="p-3 seed-product" >
                    <Col md={6}>
                        <Image className="mx-auto image-seed" src={product.image} alt={product.name} width={200} />
                    </Col>
                    <Col md={3}>
                        <ListGroup className="borderless" variant='flush'>
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Price: {product.price}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Description: {product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>RS. {product.price}</strong></Col>
                                </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button type="button" className="btn btn-block" >Add To Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeedProductScreen
