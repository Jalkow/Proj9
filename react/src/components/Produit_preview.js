import React, {Component} from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Produit_preview(props){
    return(
        <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
            <Card className="product-card">
                <Card.Img variant="top" src={"http://localhost:8080" + props.article.attributes.preview_photo.data.attributes.url} />
                <Card.Body>
                    <Card.Title>{props.article.attributes.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.article.attributes.prix + "€"}</Card.Subtitle>
                    <Card.Text>
                        {"Date de parution :\n" + props.article.attributes.publishedAt.substring(0,10)}
                    </Card.Text>
                    <Button as={Link} to= {"/produit_details"} state={{article:props.article}} variant="primary">Détails de l'article</Button>
                    <Button onClick={() => props.AddToPanier(props.article)} variant="success">Ajouter au panier</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Produit_preview;