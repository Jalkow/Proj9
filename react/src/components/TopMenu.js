import React, {Component} from 'react';
import {Navbar, Button, Nav, Form, FormControl, NavDropdown, Dropdown} from 'react-bootstrap';
import {
    Link,
    Navigate
} from 'react-router-dom';
import logo from "../img/bibouroi_logo.jpg";
import PanierTopMenu from './PanierTopMenu';


class TopMenu extends Component{
    constructor(props){
        super(props)
        this.state={
            search:""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSearchSubmit = (e) =>{
        e.preventDefault();
        console.log("test");
        return <Navigate to={"/produits/search/" + this.state.search} />;
        /*
        const history = useHistory();
        history.push("/produits/search/" + this.state.search); */
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
                        <NavDropdown title="Produits" id="produits_dropdown">
                            <Dropdown.Item as={Link} to="/produits">Tous</Dropdown.Item>
                            <NavDropdown.Divider/>
                            <Dropdown.Item as={Link} to="/produits/broderie">Broderies</Dropdown.Item>
                            <NavDropdown.Divider/>
                            <Dropdown.Item as={Link} to="/produits/habit_homme">Habits homme </Dropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <PanierTopMenu content={this.props.dropdown_content} total_prix_articles={this.props.total_prix_articles_panier} RemFromPanier={this.props.RemFromPanier} />
                    <Form className="d-flex" onSubmit={this.handleSearchSubmit}>
                        <FormControl type="search" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)} placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button as={Link} to={"/search/" + this.state.search} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default TopMenu;
