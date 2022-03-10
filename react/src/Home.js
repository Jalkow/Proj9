import React, { Component } from 'react';
import { Col, Container, Row, Modal, Button} from 'react-bootstrap';
import Carousel_articles from './components/Carousel_articles';
import Carousel_marques from './components/Carousel_marques';
import { strapi_host_url } from './strapi';

class Home extends Component{

  constructor(props) {
    super(props)
    this.state={
      latest_articles:[],
      most_discounted_articles:[],
      most_bought_articles:[],
      marques:[],
    }
  }

  async componentDidMount(){
    const basicurl = strapi_host_url + "/api/Articles?populate=*";

    const qs = require('qs');

    //articles les plus récents
    let query = qs.stringify({
    pagination: {
      limit: 3
    },
      sort: ["publishedAt:desc"],
    }, {
      encodeValuesOnly: true,
    }); 
    let url_with_filters = basicurl + '&' + query;
    const response_latest = await fetch(url_with_filters, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const latest_articles = await response_latest.json()

    //articles les plus réduits
    query = qs.stringify({
    pagination: {
      limit: 3
    },
      sort: ["reduction:desc"],
    }, {
      encodeValuesOnly: true,
    });
    url_with_filters = basicurl + '&' + query;
    const response_most_discounted = await fetch(url_with_filters, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const most_discounted_articles = await response_most_discounted.json()

    //articles les plus achetés
    query = qs.stringify({
    pagination: {
      limit: 3
    },
      sort: ["numb_time_bought:desc"],
    }, {
      encodeValuesOnly: true,
    });
    url_with_filters = basicurl + '&' + query;
    const response_most_bought = await fetch(url_with_filters, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const most_bought_articles = await response_most_bought.json()

    //marques
    query = qs.stringify({
      pagination: {
        limit: 5
      }}, {
        encodeValuesOnly: true,
    });
    url_with_filters = strapi_host_url + "/api/Marques?populate=*" + "&" + query;
    const response_marques = await fetch(url_with_filters, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const marques = await response_marques.json()

    this.setState({
      latest_articles:latest_articles,
      most_discounted_articles:most_discounted_articles,
      most_bought_articles:most_bought_articles,
      marques:marques
    })
  }

  render() {
    return (
      <Container fluid className="home_content-container">
        <Row className="justify-content-center">
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
          <Col md={12} lg={4} className="carousel_container">
            <h2 className="accueil_subtitle">Nos articles les plus récents :</h2>
            <Carousel_articles articles={this.state.latest_articles.data} AddToPanier={this.props.AddToPanier} />
          </Col>

          <Col md={12} lg={4} className="carousel_container">
            <h2 className="accueil_subtitle">Nos meilleures promos :</h2>
            <Carousel_articles articles={this.state.most_discounted_articles.data} AddToPanier={this.props.AddToPanier}/>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-center">
          <Col md={12} lg={6} className="carousel_container">
            <h2 className="accueil_subtitle">Nos articles les plus achetés :</h2>
            <Carousel_articles articles={this.state.most_bought_articles.data} AddToPanier={this.props.AddToPanier}/>
          </Col>

          <Col md={12} lg={6} className="carousel_container">
            <h2 className="accueil_subtitle">Marques disponibles :</h2>
            <Carousel_marques marques={this.state.marques.data} />
          </Col>
        </Row>
        </Container>
        
      </Container>
    );
  }
}

export default Home;
