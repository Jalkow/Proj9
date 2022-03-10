import React, {Component} from 'react';
import {Button, NavDropdown, Dropdown,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";
import Article_dropdown_panier from './Article_dropdown_panier';

class Panier_TopMenu extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <NavDropdown title={<BsFillBasketFill/>} id="basic-nav-dropdown">
                <Dropdown.ItemText id="panier_dropdown_toptext">Liste des articles :</Dropdown.ItemText>
                {
                    this.props.content && this.props.content.map((article,i) =>{
                        return(
                            <div key={i}>
                                <NavDropdown.Item>
                                    <Article_dropdown_panier article={article} articleIndex={i} RemFromPanier={this.props.RemFromPanier}/>
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </div>
                        );
                    })
                }
                <Dropdown.ItemText id="panier_dropdown_prix_total">{"Prix total : " + this.props.total_prix_articles + "€"}</Dropdown.ItemText>
                <Button as={Link} to="/commande" variant="success">Passer la commande</Button>
            </NavDropdown>            
        );
    }
}


export default Panier_TopMenu;