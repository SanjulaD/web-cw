import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
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


import { listSeedProductsDetails } from './../../actions/productSeedActions'
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const SeedProductScreen = ({ match }) => {

    const dispatch = useDispatch()

    const prodcutSeedDetails = useSelector(state => state.prodcutSeedDetails)
    const { loading, error, productSeed } = prodcutSeedDetails

    useEffect(() => {
        dispatch(listSeedProductsDetails(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, match])

    return (
        <div className="productScreen">
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/farmers/purchaseSeeds">GO BACK</Link>
                {
                    loading ?
                        <Loader />
                        : error
                            ? <Message variant='danger'>{error}</Message>
                            : (
                                <Row className="p-3 seed-product" >
                                    <Col md={6}>
                                        <Image className="mx-auto image-seed" src={productSeed.image} alt={productSeed.name} width={200} />
                                    </Col>
                                    <Col md={3}>
                                        <ListGroup className="borderless" variant='flush'>
                                            <ListGroup.Item>
                                                <h2>{productSeed.name}</h2>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Rating value={productSeed.rating} text={`${productSeed.numReviews} reviews`} />
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h4>Price: {productSeed.price}</h4>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>Description: {productSeed.description}</p>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={3}>
                                        <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Price:</Col>
                                                        <Col><strong>RS. {productSeed.price}</strong></Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Status:</Col>
                                                        <Col>
                                                            {productSeed.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
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
                            )
                }
            </Container>
        </div>
    )
}

export default SeedProductScreen
