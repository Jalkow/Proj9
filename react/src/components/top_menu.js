import React, {Component} from 'react';
import {Navbar, Button, Nav, Form, FormControl, NavDropdown, Dropdown} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import logo from "../img/bibouroi_logo.jpg";
import { BsFillBasketFill } from "react-icons/bs";

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
                    <Form className="d-flex">
                        <NavDropdown title={<BsFillBasketFill/>} id="basic-nav-dropdown">
                            <Dropdown.ItemText id="panier_dropdown_toptext">Liste des articles :</Dropdown.ItemText>
                            {
                                this.props.dropdown_content && this.props.dropdown_content.map((article,i) =>{
                                    return(
                                        <>
                                            <NavDropdown.Item key={i}>
                                                <Dropdown.ItemText>{"Nom : " + article.attributes.name}</Dropdown.ItemText>
                                                <Dropdown.ItemText>{"Prix : " + article.attributes.prix + "€"}</Dropdown.ItemText>
                                                <img src={"http://localhost:8080" + article.attributes.preview_photo.data.attributes.url}></img>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                        </>
                                    );
                                })
                            }
                            <Dropdown.ItemText id="panier_dropdown_prix_total">{"Prix total : " + this.props.total_prix_articles_panier + "€"}</Dropdown.ItemText>
                            <Button as={Link} to="/commande" variant="success">Passer la commande</Button>
                        </NavDropdown>
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                        
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default TopMenu;