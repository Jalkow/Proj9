import React, {Component} from 'react';
import {Button, NavDropdown, Dropdown,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";

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
                        let text_prix = article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction) + "€"; // prix après réduction
                        if(article.attributes.reduction != 0){
                            text_prix += " (" + article.attributes.prix + "€ avec " + article.attributes.reduction + "% de reduction)"
                        }
                        return(
                            <>
                                <NavDropdown.Item key={i}>
                                    <Dropdown.ItemText>{"Nom : " + article.attributes.name}</Dropdown.ItemText>
                                    <Dropdown.ItemText>{"Prix : " + text_prix } </Dropdown.ItemText>
                                    <img src={"http://localhost:8080" + article.attributes.preview_photo.data.attributes.url}></img>
                                    <br></br>
                                    <Button variant="danger" onClick={() => this.props.RemFromPanier(i)} >Supprimer du panier</Button>
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </>
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