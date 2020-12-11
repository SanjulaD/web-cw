import React from 'react'
import {} from 'react-router-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css'

const Footer = () => {
    return (
        <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
            <div style={{ backgroundColor: "#21d192" }}>
                <MDBContainer>
                    <MDBRow className="py-4 d-flex align-items-center">
                        <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text"> Get connected with us on social networks!</h6>
                        </MDBCol>
                        <MDBCol md="6" lg="7" className="text-center text-md-right">
                            <a className="fb-ic ml-0">
                                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-lg-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text mr-lg-4"> </i>
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Company name</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>Here you can use rows and columns here to organize your footer
                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. </p>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Products</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p><a  className="dark-grey-text"> MDBootstrap</a></p>
                        <p><a  className="dark-grey-text">MDWordPress </a></p>
                        <p><a  className="dark-grey-text">BrandFlow</a></p>
                        <p><a  className="dark-grey-text">ootstrap Angular</a></p>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p><a  className="dark-grey-text">Your Account</a></p>
                        <p><a  className="dark-grey-text">Become an Affiliate</a></p>
                        <p><a  className="dark-grey-text">Shipping Rates</a></p>
                        <p><a  className="dark-grey-text">Help</a></p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Contact</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p><i className="fa fa-home mr-3" /> New York, NY 10012, US</p>
                        <p><i className="fa fa-envelope mr-3" /> info@example.com</p>
                        <p><i className="fa fa-phone mr-3" /> + 01 234 567 88</p>
                        <p><i className="fa fa-print mr-3" /> + 01 234 567 89</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>

    )
}

export default Footer
