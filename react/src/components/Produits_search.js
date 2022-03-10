import React, {Component} from 'react';
import { Spinner, Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { strapi_host_url } from '../strapi';
import Produit_preview from './Produit_preview';

class Produits_search extends Component{
    constructor(props) {
      super(props)
      this.state={
            filteredArticles:[],
            articles:[],
            loading:true,
      }
    }

    setArticlesToDisplay = async(search) =>{
        let url = strapi_host_url + "/api/Articles?populate=*";
        if (this.props.search !== ""){
            const qs = require('qs');
            const query = qs.stringify({
                filters: {
                    $or: [
                        {
                            name: {
                                $containsi: search,
                            },
                        },
                        {
                            marque:{
                                name: {
                                    $containsi: search,
                                },
                            },
                        },
                        {
                            marque:{
                                nationalite: {
                                    $containsi: search,
                                },
                            },
                        },
                    ],
                },
            }, {
            encodeValuesOnly: true,
            });
            url += '&' + query;
        } 

        const response = await fetch(url, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        this.setState({
          articles:articles,
          filteredArticles:articles.data,
          loading:false
        });
    }


    filterArticles = (value, condition) =>{
        if(condition === "BIGGERPRICE"){
            this.setState({
                filteredArticles: this.state.articles.data.filter(article => (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction)) > value),
            })
        }
        else if(condition === "SMALLERPRICE"){
            this.setState({
                filteredArticles: this.state.articles.data.filter(article => (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction)) < value),
            })
        }

        else if(condition === "BIGGERREDUCTION"){
            this.setState({
                filteredArticles: this.state.articles.data.filter(article => article.attributes.reduction > value),
            })
        }
    }

    async componentDidMount () {
        this.setArticlesToDisplay(this.props.search);
    }

    
    async componentWillReceiveProps (nextProps) {
        if(nextProps.search === this.props.search){
            return;
        }
        this.setArticlesToDisplay(nextProps.search);
    }
    
    render() {
            
        if(this.state.loading) {
            return(
                <Container fluid>
                    <Row id="products-content">
                        <Col xs={12} md={2} className="products-filters-container">
                            <Button variant="dark" onClick={() => this.filterPriceUpper(20)}>Prix supérieur à 20€</Button>
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
                        <h2>Filtres :</h2>
                        <Button className="filter-button" onClick={() => this.setState({filteredArticles:this.state.articles.data})} variant="danger">Annuler filtre</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(20, "BIGGERPRICE")} variant="light">Prix supérieur à 20€</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(50, "SMALLERPRICE")} variant="light">Prix inférieur à 50€</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(50, "BIGGERREDUCTION")} variant="light">Réduction de plus de 50%</Button>
                        
                    </Col>
                    <Col xs={12} md={8} className="products-list-container" >
                        <Row className="justify-content-md-center">
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
                            {
                                this.state.filteredArticles && this.state.filteredArticles.map((article,i) =>{
                                    return(
                                        <Col key={i} xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
                                            <Produit_preview article={article} AddToPanier={this.props.AddToPanier}/>
                                        </Col>
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


export default Produits_search