import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const products = useSelector(state => state.products)
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
                <Link to="/"><Navbar.Brand>Redux Toolkit</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/cart" as={Link} style={{position: "static"}}>
                            <span style={{
                                position: "relative",
                                left: "48px",
                                bottom: "9px",
                                backgroundColor: "red",
                                borderRadius: "50%",
                                padding: "0 5px",
                                color: "white",
                               
                            }}>{products.length}</span>
                            Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Dashboard;
