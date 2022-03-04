import React, {Component} from 'react';
import { Spinner, Container, Navbar, Nav, Col, Row, Card, Button } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

 class Produits extends Component{
    constructor(props) {
      super(props)
    }
    render() {
            
        if(this.props.loading) {
            return(
                <>
                    <Row id="products-content">
                        <Col xs={12} md={2} className="products-filters-container">
                        
                        </Col>
                        <Col xs={12} md={8} className="products-list-container" >
                            <Container>
                                <Spinner className='mx-auto' animation="border" variant="info" />  
                            </Container>
                            
                        </Col>
                    </Row>
                      
                </>
            )
        }
        
        return(
            <>
                <Row id="products-content">
                    <Col xs={12} md={2} className="products-filters-container">
                        
                    </Col>
                    <Col xs={12} md={8} className="products-list-container" >
                        <Row className="justify-content-md-center">
                            {
                                this.props.articles && this.props.articles.map((article,i) =>{
                                    return(
                                        <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
                                            <Card key={i} className="product-card">
                                                <Card.Img variant="top" src={"http://localhost:1337" + article.attributes.preview_photo.data.attributes.url} />
                                                <Card.Body>
                                                    <Card.Title>{article.attributes.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{article.attributes.prix + "€"}</Card.Subtitle>
                                                    <Card.Text>
                                                        {"Date de parution :\n" + article.attributes.publishedAt.substring(0,10)}
                                                    </Card.Text>
                                                    <Button variant="primary">Détails de l'article</Button>
                                                    <Button onClick={() => this.props.AddToPanier(article)} variant="success">Ajouter au panier</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row> 
                    </Col>
                </Row>
            </>
        );
        
        
    }
}

export default Produits;

