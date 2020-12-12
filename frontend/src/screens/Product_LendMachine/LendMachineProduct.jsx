import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {
    Col,
    Container,
    Row,
    Image,
    ListGroup,
    Card,
    Button
} from 'react-bootstrap';
import './LendMachineScreen.css';

const LendMachineProduct = ({ match }) => {
    const [machine, setMachine] = useState([]);

    useEffect(() => {
        const fetchMachines = async () => {
            const { data } = await axios.get(`/api/lendMachines/${match.params.id}`)

            setMachine(data);
        }
        fetchMachines();
    }, [match.params.id])


    return (
        <div className="productScreen">
            <Container>
                <Link className="btn btn-go-back btn-dark" to="/farmers/lendMachines">GO BACK</Link>
                <Row className="p-3 seed-product" >
                    <Col md={6}>
                        <Image className="mx-auto image-machine" src={machine.image} alt={machine.name} width={200} />
                    </Col>
                    <Col md={3}>
                        <ListGroup className="borderless" variant='flush'>
                            <ListGroup.Item>
                                <h2>{machine.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Price: {machine.price}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Description: {machine.description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Quantity Available: {machine.quantity}kg</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Machine Power:</Col>
                                        <Col><strong>{machine.machine_power}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Target Plant:</Col>
                                        <Col>
                                            {machine.target_plant}
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

export default LendMachineProduct
