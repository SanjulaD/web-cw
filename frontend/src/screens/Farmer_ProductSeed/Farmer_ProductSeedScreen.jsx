import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Button, Alert } from 'react-bootstrap'
import PurchaseSeeds from '../../components/PurchaseSeeds/PurchaseSeeds';
import './Farmer_ProductSeedStyles.css'

const Farmer_ProductSeedScreen = () => {

    const [numberOfItems, setNumberOfItems] = useState(3);
    const [seeds, setSeeds] = useState([]);

    useEffect(() => {
        const fetchSeeds = async () => {
            const { data } = await axios.get('/api/seeds')

            setSeeds(data);
        }
        fetchSeeds();
    },[])

    const showMore = () => {
        if (numberOfItems + 3 <= seeds.length) {
            setNumberOfItems(numberOfItems + 3)
        } else {
            setNumberOfItems(seeds.length)
        }
    }

    return (

        <div className="ProductSeedScreen">
            <Container>
                <h1 className="p-3" style={{ textAlign: 'center' }}>Latest Seeds</h1>
                <Row>
                    {
                        seeds
                            .slice(0, numberOfItems)
                            .map(seed => (
                                <PurchaseSeeds
                                    key={seed._id}
                                    _id={seed._id}
                                    name={seed.name}
                                    image={seed.image}
                                    rating={seed.rating}
                                    reviews={seed.numReviews}
                                    price={seed.price}
                                />
                            ))
                    }
                    {
                        numberOfItems >= seeds.length
                            ? <Alert style={{backgroundColor:'red'}} className="col-md-12 text-center">Finished</Alert>
                            : ''
                    }
                    <Button className="col-md-12 text-center" variant="success outline-dark" onClick={showMore}>show more</Button>
                </Row>

            </Container>
        </div>
    )
}

export default Farmer_ProductSeedScreen
