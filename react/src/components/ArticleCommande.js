import React from 'react';
import {Button,} from 'react-bootstrap';
import { strapi_host_url } from '../strapi';

function ArticleCommande(props){
    let text_prix = props.article.attributes.prix - (props.article.attributes.prix/100 * props.article.attributes.reduction) + "€"; // prix après réduction
    if(props.article.attributes.reduction != 0){
        text_prix += " (" + props.article.attributes.prix + "€ avec " + props.article.attributes.reduction + "% de reduction)"
    }

    return(
        <>
            <h2 className="commande-article-text">{"Nom : " + props.article.attributes.name} </h2>
            <h2 className="commande-article-text">{"Prix : " + text_prix } </h2>
            <img className="commande-article-img" src={strapi_host_url + props.article.attributes.preview_photo.data.attributes.url}></img>
            <br></br>
            <Button className="commande-article-button" variant="danger" onClick={() => props.RemFromPanier(props.articleIndex)} >Supprimer du panier</Button>
        </>
    );   
}

export default ArticleCommande