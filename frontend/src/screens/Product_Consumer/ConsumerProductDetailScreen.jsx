import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    Col,
    Container,
    Row,
    Image,
    ListGroup,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import './consumerStyles.css';

import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listConsumerProductsDetails } from '../../actions/consumerProductAction.js'
import Meta from '../../components/Helmet/Meta';

const ConsumerProductDetailScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch()

    const consumerProductDetails = useSelector(state => state.consumerProductDetails)
    const { loading, error, consumerProduct } = consumerProductDetails

    useEffect(() => {
        dispatch(listConsumerProductsDetails(match.params.id))
    }, [dispatch, match])

    const addtoCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div className="productScreen">
            <Meta
                title="Agroic | Consumer Product"
            />
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/consumer">GO BACK</Link>
                {
                    loading ?
                        <Loader />
                        : error
                            ? <Message variant='danger'>{error}</Message>
                            : (
                                <Row className="p-3 seed-product" >
                                    <Col md={6}>
                                        <Image className="mx-auto image-seed"
                                            src={consumerProduct.image}
                                            alt={consumerProduct.prod_name}
                                            width={300}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <ListGroup className="borderless" variant='flush'>
                                            <ListGroup.Item>
                                                <h2>{consumerProduct.prod_name}</h2>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h4>Seller: {consumerProduct.seller_name}</h4>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <h4>Price: {consumerProduct.price}</h4>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>Avalaible Location: {consumerProduct.avalaible_location}</p>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col md={3}>
                                        <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Price:</Col>
                                                        <Col><strong>RS. {consumerProduct.price}</strong></Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Status:</Col>
                                                        <Col>
                                                            {consumerProduct.quantity > 0 ? 'In Stock' : 'Out Of Stock'}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                {
                                                    consumerProduct.quantity > 0 && (
                                                        <ListGroup.Item>
                                                            <Row>
                                                                <Col>Qty</Col>
                                                                <Col>
                                                                    <Form.Control as='select' value={qty} onChange={(e => setQty(e.target.value))}>
                                                                        {
                                                                            [...Array(consumerProduct.quantity).keys()]
                                                                                .map(x =>
                                                                                    <option
                                                                                        key={x + 1}
                                                                                        value={x + 1}
                                                                                    >{x + 1}</option>)
                                                                        }
                                                                    </Form.Control>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                    )
                                                }
                                                <ListGroup.Item>
                                                    <Button type="button" className="btn btn-block" onClick={addtoCartHandler}>Add To Cart</Button>
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


export default ConsumerProductDetailScreen
