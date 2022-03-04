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
                        <Row>
                            {
                                this.props.articles && this.props.articles.map((article,i) =>{
                                    return(
                                    <>
                                        <Col xs={6} md={2}>
                                            <Card className="product-card">
                                                <Card.Img variant="top" src="holder.js/100px180" />
                                                <Card.Body>
                                                    <Card.Title key={i}>{article.attributes.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                    <Card.Text>
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </>
                                        
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

