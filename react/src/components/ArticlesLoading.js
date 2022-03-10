import React, {Component} from 'react';
import { Spinner, Container, Col, Row, } from 'react-bootstrap';

class ArticlesLoading extends Component{
    render(){
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
        );
    }
}

export default ArticlesLoading