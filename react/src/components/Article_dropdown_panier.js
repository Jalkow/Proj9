import React from 'react';
import {Button, Dropdown,} from 'react-bootstrap';
import { strapi_host_url } from '../strapi';

function Article_dropdown_panier(props){
    let text_prix = props.article.attributes.prix - (props.article.attributes.prix/100 * props.article.attributes.reduction) + "€"; // prix après réduction
    if(props.article.attributes.reduction != 0){
        text_prix += " (" + props.article.attributes.prix + "€ avec " + props.article.attributes.reduction + "% de reduction)"
    }
    return(
        <>
            <Dropdown.ItemText>{"Nom : " + props.article.attributes.name}</Dropdown.ItemText>
            <Dropdown.ItemText>{"Prix : " + text_prix } </Dropdown.ItemText>
            <img src={strapi_host_url + props.article.attributes.preview_photo.data.attributes.url}></img>
            <br></br>
            <Button variant="danger" onClick={() => props.RemFromPanier(props.articleIndex)} >Supprimer du panier</Button>
        </>
    );   
}

export default Article_dropdown_panier