import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Footer extends Component{

    render(){
        return(
            <Container fluid className="footer-container">
                <Row className="justify-content-md-center">
                    <Col xs={12}>
                        <p>&copy; Bibouroi 2022 - tous droits réservés</p>    
                    </Col>
                    <Col xs={12}>
                        <h2>Mentions légales :</h2>
                        <p>Contact : dgehant@gaming.tech ou lventurini@gaming.tech</p>
                        <p>Adresse : 16 Rue de l'Université, 69007 Lyon</p>
                    </Col>
                </Row>    
            </Container>
        );
    }
}

export default Footer