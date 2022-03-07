import React, { Component } from 'react';
import { Col, Container, Row, Carousel} from 'react-bootstrap';
import Produit_preview from './components/Produit_preview';

class App extends Component{

  constructor(props) {
    super(props)
    this.state={
      latest_articles:[]
    }
  }

  async componentDidMount(){
    let url = 'http://localhost:8080/api/Articles?populate=*';
    const qs = require('qs');
    const query = qs.stringify({
    pagination: {
      limit: 3
    },
      sort: ["publishedAt:desc"],
    }, {
      encodeValuesOnly: true,
    }); 
    url += '&' + query;

    const response = await fetch(url, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({
      latest_articles:articles,
    })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center home_content-container">
          <Col xs={12} md={6}>
            <h2 className="accueil_subtitle">Our latest articles :</h2>
            <Carousel>
            {
              this.state.latest_articles.data && this.state.latest_articles.data.map((article,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-md-center">
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
      </Container>
    );
  }
}

export default App;
