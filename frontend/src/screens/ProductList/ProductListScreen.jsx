import React from 'react'
import {
    Container,
    Row,
} from 'react-bootstrap'
import './listStyles.css'
import SeedList from './SeedList/SeedList'
import LendMachineList from './/LendMachineList/LendMachineList'
import ConsumerList from './ConsumerList/ConsumerList'
const ProductListScreen = () => {

    return (
        <div style={{ marginTop: '120px' }}>
            <Container>
                <Row>
                    <SeedList />
                    <LendMachineList />
                    <ConsumerList />
                </Row>
            </Container>
        </div>
    )
}

export default ProductListScreen
