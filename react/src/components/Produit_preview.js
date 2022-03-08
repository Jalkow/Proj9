import React, {Component} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Produit_preview(props){
    let text_prix = props.article.attributes.prix - (props.article.attributes.prix/100 * props.article.attributes.reduction) + "€"; // prix après réduction
    if(props.article.attributes.reduction != 0){
        text_prix += " (" + props.article.attributes.prix + "€ avec " + props.article.attributes.reduction + "% de reduction)"
    }

    return(
        <Card className="info-card">
            <Card.Img variant="top" src={"http://localhost:8080" + props.article.attributes.preview_photo.data.attributes.url} />
            <Card.Body>
                <Card.Title>{props.article.attributes.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{text_prix}</Card.Subtitle>
                <Card.Text>
                    {"Date de parution :\n" + props.article.attributes.publishedAt.substring(0,10)}
                </Card.Text>
                <Button as={Link} to= {"/produit_details"} state={{article:props.article}} variant="primary">Détails de l'article</Button>
                <Button onClick={() => props.AddToPanier(props.article)} variant="success">Ajouter au panier</Button>
            </Card.Body>
        </Card>
    );
}

export default Produit_preview;