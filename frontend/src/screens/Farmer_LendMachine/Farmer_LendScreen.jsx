import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Button, Alert } from 'react-bootstrap'
import LendMachines from './../../components/LendMachines//LendMachines';

import './Farmer_LendMachine.css'

const Farmer_LendScreen = () => {
    const [numberOfItems, setNumberOfItems] = useState(3);
    const [machine, setMachines] = useState([]);

    useEffect(() => {
        const fetchSeeds = async () => {
            const { data } = await axios.get('/api/lendMachines')

            setMachines(data);
        }
        fetchSeeds();
    }, [])

    const showMore = () => {
        if (numberOfItems + 3 <= machine.length) {
            setNumberOfItems(numberOfItems + 3)
        } else {
            setNumberOfItems(machine.length)
        }
    }

    return (

        <div className="MachineLendScreen">
            <Container>
                <h1 className="p-3" style={{ textAlign: 'center' }}>All Machines</h1>
                <Row>
                    {
                        machine
                            .slice(0, numberOfItems)
                            .map(machine => (
                                <LendMachines
                                    key={machine._id}
                                    _id={machine._id}
                                    name={machine.name}
                                    image={machine.image}
                                    targetPlant={machine.target_plant}
                                    price={machine.price}
                                />
                            ))
                    }
                    {
                        numberOfItems >= machine.length
                            ? <Alert style={{ backgroundColor: 'red' }} className="col-md-12 text-center">Finished</Alert>
                            : ''
                    }
                    <Button className="col-md-12 text-center" variant="success outline-dark" onClick={showMore}>show more</Button>
                </Row>

            </Container>
        </div>
    )
}

export default Farmer_LendScreen
