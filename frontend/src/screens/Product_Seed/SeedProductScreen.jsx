import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Rating from '../../components/Rating/Rating';
import {
    Col,
    Container,
    Row,
    Image,
    ListGroup,
    Card,
    Button
} from 'react-bootstrap';
import './SeedProduct.css'

const SeedProductScreen = ({ match }) => {

    const [seeds, setSeeds] = useState([]);

    useEffect(() => {
        const fetchSeeds = async () => {
            const { data } = await axios.get(`/api/seeds/${match.params.id}`)

            setSeeds(data);
        }
        fetchSeeds();
    }, [match.params.id])


    return (
        <div className="productScreen">
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/farmers/purchaseSeeds">GO BACK</Link>
                <Row className="p-3 seed-product" >
                    <Col md={6}>
                        <Image className="mx-auto image-seed" src={seeds.image} alt={seeds.name} width={200} />
                    </Col>
                    <Col md={3}>
                        <ListGroup className="borderless" variant='flush'>
                            <ListGroup.Item>
                                <h2>{seeds.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={seeds.rating} text={`${seeds.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Price: {seeds.price}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Description: {seeds.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>RS. {seeds.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {seeds.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
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
