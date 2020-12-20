import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import './Header.css'

import { logout } from './../../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand className="nav-cal" >
                    <Image width="50px" src="favicon/android-chrome-512x512.png" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                        <Nav.Link className="nav-cal">HOME</Nav.Link>
                    <LinkContainer to="/farmer">
                        <Nav.Link className="nav-cal">FARMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/consumer">
                        <Nav.Link className="nav-cal">CONSUMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/supplier">
                        <Nav.Link className="nav-cal">SUPPLIER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Nav.Link className="cart nav-cal">
                            <i className="fas fa-shopping-cart"></i>
                            CART
                        </Nav.Link>
                    </LinkContainer>
                    {
                        userInfo ? (
                            <NavDropdown title={userInfo.name.toUpperCase()} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>PROFILE</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link className="login nav-cal">SIGN IN</Nav.Link>
                                </LinkContainer>
                            )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
