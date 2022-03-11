import React, {Component} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import ProduitPreview from './ProduitPreview';

 class Produits extends Component{
    constructor(props) {
      super(props)
      this.state={
            filteredArticles:[]
      }
    }

    filterArticles = (value, condition) =>{
        if(condition === "BIGGERPRICE"){
            this.setState({
                filteredArticles: this.props.articles.filter(article => (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction)) > value),
            })
        }
        else if(condition === "SMALLERPRICE"){
            this.setState({
                filteredArticles: this.props.articles.filter(article => (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction)) < value),
            })
        }

        else if(condition === "BIGGERREDUCTION"){
            this.setState({
                filteredArticles: this.props.articles.filter(article => article.attributes.reduction > value),
            })
        }
    }

    componentDidMount () {
        this.setState({
            filteredArticles:this.props.articles,
        })
    }

    
    componentWillReceiveProps (nextProps) {
        if(nextProps.articles === this.props.articles){
            return;
        }

        this.setState({
            filteredArticles:nextProps.articles,
        })
    }


    render() {
        return(
            <Container fluid>
                <Row id="products-content">
                    <Col xs={12} lg={2} className="products-filters-container">
                        <h2>Filtres :</h2>
                        <Button className="filter-button" onClick={() => this.setState({filteredArticles:this.props.articles})} variant="danger">Annuler filtre</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(20, "BIGGERPRICE")} variant="light">Prix supérieur à 20€</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(50, "SMALLERPRICE")} variant="light">Prix inférieur à 50€</Button>
                        <Button className="filter-button" onClick={() => this.filterArticles(50, "BIGGERREDUCTION")} variant="light">Réduction de plus de 50%</Button>
                        
                    </Col>
                    <Col xs={12} lg={8} className="products-list-container" >
                        <Row className="justify-content-md-center">
                            {
                                this.state.filteredArticles && this.state.filteredArticles.map((article,i) =>{
                                    return(
                                        <Col key={i} xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}} lg={3}>
                                            <ProduitPreview article={article} AddToPanier={this.props.AddToPanier}/>
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

