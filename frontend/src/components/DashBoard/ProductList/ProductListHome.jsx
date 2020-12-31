import React from 'react'
import {
    Container,
    Row,
} from 'react-bootstrap'
import './listStyles.css'
import { Scrollbar } from "react-scrollbars-custom";
import SeedList from './SeedList/SeedList'
import LendMachineList from './LendMachineList/LendMachineList'
import ConsumerList from './ConsumerList/ConsumerList'

const ProductListHome = () => {

    return (
        <Scrollbar style={{ width: '100%', height: 450 }}>
            <Container>
                <Row className="list-container">
                    <SeedList />
                    <LendMachineList />
                    <ConsumerList />
                </Row>
            </Container>
        </Scrollbar>
    )
}

export default ProductListHome
