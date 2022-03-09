import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Article_commande from './Article_commande';

class Commande extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Container fluid className="commande-content-container">
                <Row>
                    <Col xs={12} md={8}>

                    </Col>
                    <Col className="commande-articles-container" xs={12} md={4}>
                        {
                            this.props.panier && this.props.panier.map((article,i) =>{
                                return(
                                    <div key={i}>
                                        <Article_commande article={article} articleIndex={i} RemFromPanier={this.props.RemFromPanier}/>
                                    </div>
                                );
                            })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Commande