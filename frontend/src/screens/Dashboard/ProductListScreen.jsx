import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductListHome from '../../components/DashBoard/ProductList/ProductListHome'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const ProductListScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>AgriCom Products</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{marginLeft:"30px"}}>Product List</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>    
                        <ProductListHome />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductListScreen
