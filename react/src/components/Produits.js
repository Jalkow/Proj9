import React, {Component} from 'react';
import { Spinner, Container, Col, Row, Button } from 'react-bootstrap';
import Produit_preview from './Produit_preview';

 class Produits extends Component{
    constructor(props) {
      super(props)
      this.state={
            filteredArticles:[],
            articles:[],
            loading:true,
            category:[],
      }
    }

   async componentDidMount () {
        setTimeout(async () => {
        let url = 'http://localhost:8080/api/Articles?populate=*';
        if (this.props.category){
            const qs = require('qs');
            const query = qs.stringify({
            filters: {
                category: {
                $eq: this.props.category
                },
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
          category:this.props.category,
          loading:false
        });
        }, 2000);
    }
    
    render() {
            
        if(this.state.loading) {
            return(
                <Container fluid>
                    <Row id="products-content">
                        <Col xs={12} md={2} className="products-filters-container">
                            <Button variant="dark">Dark</Button>
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
                        <Button variant="dark">Dark</Button>
                    </Col>
                    <Col xs={12} md={8} className="products-list-container" >
                        <Row className="justify-content-md-center">
                            {
                                this.state.articles.data && this.state.articles.data.map((article,i) =>{
                                    return(
                                        <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
                                            <Produit_preview key={i} article={article} AddToPanier={this.props.AddToPanier} />
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

export default Produits;

