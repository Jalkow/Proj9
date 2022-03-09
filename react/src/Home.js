import React, { Component } from 'react';
import { Col, Container, Row, Carousel} from 'react-bootstrap';
import Marque_infos from './components/Marque_infos';
import Produit_preview from './components/Produit_preview';

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
    const basicurl = 'http://localhost:8080/api/Articles?populate=*';

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
    url_with_filters = "http://localhost:8080/api/Marques?populate=*" + "&" + query;
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
    console.log(this.state.marques)
    return (
      <Container fluid className="home_content-container">
        <Row className="justify-content-center">
          <Col md={12} lg={4} className="carousel_container">
            <h2 className="accueil_subtitle">Nos articles les plus récents :</h2>
            <Carousel interval={null}>
            {
              this.state.latest_articles.data && this.state.latest_articles.data.map((article,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Produit_preview key={i} article={article} AddToPanier={this.props.AddToPanier} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
            </Carousel>
          </Col>

          <Col md={12} lg={4} className="carousel_container">
            <h2 className="accueil_subtitle">Nos meilleures promos :</h2>
            <Carousel interval={null}>
            {
              this.state.most_discounted_articles.data && this.state.most_discounted_articles.data.map((article,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Produit_preview key={i} article={article} AddToPanier={this.props.AddToPanier} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
            </Carousel>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-center">
          <Col md={12} lg={6} className="carousel_container">
            <h2 className="accueil_subtitle">Nos articles les plus achetés :</h2>
            <Carousel interval={null}>
            {
              this.state.most_bought_articles.data && this.state.most_bought_articles.data.map((article,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Produit_preview key={i} article={article} AddToPanier={this.props.AddToPanier} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
            </Carousel>
          </Col>

          <Col md={12} lg={6} className="carousel_container">
            <h2 className="accueil_subtitle">Marques disponibles :</h2>
            <Carousel interval={null}>
            {
              this.state.marques.data && this.state.marques.data.map((marque,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Marque_infos key={i} marque={marque} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
            </Carousel>
          </Col>
        </Row>
        </Container>
        
      </Container>
    );
  }
}

export default Home;
