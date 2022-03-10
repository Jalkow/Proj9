import React from 'react';
import { Card } from 'react-bootstrap';
import { strapi_host_url } from '../strapi';

function Marque_infos(props){
    return(
        <Card className="info-card">
            <Card.Img variant="top" src={strapi_host_url + props.marque.attributes.logo.data.attributes.url} />
            <Card.Body className="marque-text">
                <br></br>
                <Card.Title>{props.marque.attributes.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{"marque " + props.marque.attributes.nationalite}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default Marque_infos;