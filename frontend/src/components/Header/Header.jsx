import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand className="nav-cal" >AgriCom</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    <LinkContainer to="/">
                        <Nav.Link className="nav-cal">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/farmer">
                        <Nav.Link className="nav-cal">Farmer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/consumer">
                        <Nav.Link  className="nav-cal">Consumer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/supplier">
                        <Nav.Link  className="nav-cal">Supplier</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link className="login nav-cal">Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
