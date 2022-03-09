import React, {Component} from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Marque_infos from './Marque_infos';

class Produit_details extends Component{
    constructor(props){
        super(props);
        this.state = {
            article:null,
            marque:null,
            loading:true
        }
    }
    
    async componentDidMount(){
        const article_id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        //article
        let url = 'http://localhost:8080/api/Articles?populate=*';
        const qs = require('qs');
        let query = qs.stringify({
        filters: {
            id: {
            $eq: article_id
            },
        },
        }, {
        encodeValuesOnly: true,
        });
        url += '&' + query;
        const response = await fetch(url, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const article = await response.json()

        //infos complètes sur la marque
        url = "http://localhost:8080/api/Marques?populate=*"
        query = qs.stringify({
        filters:{
            id: {
            $eq: article.data[0].attributes.marque.data.id
            }
        },
        }, {
            encodeValuesOnly: true
        });
        url += '&' + query;
        const response_marque = await fetch(url, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const marque = await response_marque.json()
        
        this.setState({
            article:article.data[0],
            marque:marque.data[0],
            loading:false
        })
    }

    render(){
        if(this.state.loading){
            return(
                <Container fluid>
                    <Row id="products-content justify-content-center">
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
        else{
            console.log(this.state.marque)
            let text_prix = this.state.article.attributes.prix - (this.state.article.attributes.prix/100 * this.state.article.attributes.reduction) + "€"; // prix après réduction
            if(this.state.article.attributes.reduction !== 0){
                text_prix += " (" + this.state.article.attributes.prix + "€ mais avec " + this.state.article.attributes.reduction + "% de reduction)"
            }
            return(
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={10} className="product-details-container">
                            <Row>
                                <Col xs={12} lg={6}>
                                    <h2 className="product-details-title">{this.state.article.attributes.name + " (acheté " + this.state.article.attributes.numb_time_bought + " fois)"}</h2>
                                    <h3 className="product-details-infos">{"prix : " + text_prix}</h3>
                                    <h3 className="product-details-infos">{"categorie : " + this.state.article.attributes.category}</h3>
                                    <Marque_infos marque={this.state.marque}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            );    
        }
        
    }
}


export default Produit_details