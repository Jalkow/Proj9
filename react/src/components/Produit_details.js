import React, {Component} from 'react';
import { Col, Container, Row, Spinner, Button, Modal } from 'react-bootstrap';
import { strapi_host_url } from '../strapi';
import Carousel_images from './Carousel_images';
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
        let url = strapi_host_url + "/api/Articles?populate=*";
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
        url = strapi_host_url + "/api/Marques?populate=*";
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
            loading:false,
            modalIsOpen: false,
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
            let text_prix = this.state.article.attributes.prix - (this.state.article.attributes.prix/100 * this.state.article.attributes.reduction) + "€"; // prix après réduction
            if(this.state.article.attributes.reduction !== 0){
                text_prix += " (" + this.state.article.attributes.prix + "€ mais avec " + this.state.article.attributes.reduction + "% de reduction)"
            }
            return(
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} className="product-details-container">
                            <Modal show={this.props.modalState} onHide={this.props.closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Article ajouté</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>L'article a bien été ajouté à votre panier</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.props.closeModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Row>
                                <Col xs={12} lg={6}>
                                    <h2 className="product-details-title">{this.state.article.attributes.name + " (acheté " + this.state.article.attributes.numb_time_bought + " fois)"}</h2>
                                    <h3 className="product-details-infos">{"prix : " + text_prix}</h3>
                                    <h3 className="product-details-infos">{"catégorie : " + this.state.article.attributes.category}</h3>
                                    <br></br>
                                    <Row className="justify-content-center">
                                        <Col xs={12}>
                                            <h2 className="product-details-title">Marque :</h2>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Marque_infos marque={this.state.marque}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <h2 className="product-details-title">Aperçus de l'article</h2>
                                    <Carousel_images images={this.state.article.attributes.details_images.data} />
                                    <h3 className="product-details-infos">Description :</h3>
                                    <p class="product-details-description">{this.state.article.attributes.description}</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Button className="details-add-button" onClick={() => this.props.AddToPanier(this.state.article)} variant="success">Ajouter au panier</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            );    
        }
        
    }
}


export default Produit_details