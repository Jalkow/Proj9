import React, {Component} from 'react';
import { Spinner, Container, Col, Row, Button } from 'react-bootstrap';
import Produit_preview from './Produit_preview';

 class Produits extends Component{
    constructor(props) {
      super(props)
      this.state={
          filteredArticles:[]
      }
    }
    
    render() {
            
        if(this.props.loading) {
            return(
                <Container fluid>
                    <Row id="products-content">
                        <Col xs={12} md={2} className="products-filters-container">
                        
                        </Col>
                        <Col xs={12} md={8} className="products-list-container" >
                            <Container fluid>
                                <Row className='justify-content-center'>
                                    <Col xs="auto">
                                        <Spinner className='mx-auto' animation="border" variant="info" />      
                                    </Col>
                                </Row>  
                            </Container>
                        </Col>
                    </Row>
                </Container>
            )
        }
        
        return(
            <Container fluid>
                <Row id="products-content">
                    <Col xs={12} md={2} className="products-filters-container">
                        
                    </Col>
                    <Col xs={12} md={8} className="products-list-container" >
                        <Row className="justify-content-md-center">
                            {
                                this.props.articles && this.props.articles.map((article,i) =>{
                                    return(
                                        <Produit_preview key={i} article={article} AddToPanier={this.props.AddToPanier} />
                                    );
                                })
                            }
                        </Row> 
                    </Col>
                </Row>
            </Container>
        );
        
        
    }
}

export default Produits;

