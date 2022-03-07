import React, {Component} from 'react';
import {Navbar, Button, Nav, Form, FormControl, NavDropdown, Dropdown} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import logo from "../img/bibouroi_logo.jpg";
import Panier_TopMenu from './Panier_TopMenu';

class TopMenu extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Navbar variant='dark' expand="lg">
                <Navbar.Brand>
                    <img alt="logo bibouroi" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/produits">Produits</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Panier_TopMenu content={this.props.dropdown_content} total_prix_articles={this.props.total_prix_articles_panier} RemFromPanier={this.props.RemFromPanier} />
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                        
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default TopMenu;