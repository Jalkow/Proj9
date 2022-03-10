import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { strapi_host_url } from '../strapi';

function ProduitPreview(props){
    let text_prix = props.article.attributes.prix - (props.article.attributes.prix/100 * props.article.attributes.reduction) + "€"; // prix après réduction
    if(props.article.attributes.reduction !== 0){
        text_prix += " au lieu de " + props.article.attributes.prix + "€ (-" + props.article.attributes.reduction + "%)"
    }

    return(
        <>
            <Card className="info-card">
                <Card.Img variant="top" src={strapi_host_url + props.article.attributes.preview_photo.data.attributes.url} />
                <Card.Body>
                    <Card.Title>{props.article.attributes.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{text_prix}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{"Produit de la marque " + props.article.attributes.marque.data.attributes.name}</Card.Subtitle>
                    <Card.Text>
                        {"Date de parution :\n" + props.article.attributes.publishedAt.substring(0,10)}
                    </Card.Text>
                    <Button as={Link} to= {"/produit_details/" + props.article.id} variant="primary">Détails de l'article</Button>
                    <Button onClick={() => props.AddToPanier(props.article)} variant="success">Ajouter au panier</Button>
                </Card.Body>
            </Card>
        </>
        
    );
}

export default ProduitPreview;