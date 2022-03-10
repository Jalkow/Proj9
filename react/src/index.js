import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Home from './Home';
import ProduitsCategory from './components/ProduitsCategory';
import Commande from './components/Commande';
import ProduitDetails from './components/ProduitDetails';
import { BrowserRouter,
         Route,
         Routes,
         useParams,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import ProduitsSearch from './components/ProduitsSearch';
import { Button, Modal } from 'react-bootstrap';


class Root extends Component{

  constructor(props) {
    super(props)
    this.state={
       panier:[],
       panier_total_price:0,
       modalIsOpen: false,
    }
  }

  openModal = () => this.setState({ modalIsOpen: true });
    
  closeModal = () => this.setState({ modalIsOpen: false });

  ClearPanier = () =>{
    this.setState({
      panier: [],
      panier_total_price:0,
    })
  }

  AddToPanier = (article) =>{
    this.setState(prevState => ({
      panier: [...prevState.panier, article],
      panier_total_price: prevState.panier_total_price + (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction))
    }))
    this.openModal()
  }

  RemFromPanier = (index) =>{
    let removed_article = this.state.panier.splice(index, 1)[0];
    this.setState(prevState => ({
      panier_total_price: prevState.panier_total_price- (removed_article.attributes.prix - (removed_article.attributes.prix/100 * removed_article.attributes.reduction))
    }))
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <TopMenu dropdown_content={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} RemFromPanier={this.RemFromPanier}/>
          <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Article ajouté</Modal.Title>
            </Modal.Header>
            <Modal.Body>L'article a bien été ajouté à votre panier</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                    Close
                </Button>
            </Modal.Footer>
          </Modal>
          <Routes>
            <Route exact path="/" element={<Home panier={this.state.panier} AddToPanier={this.AddToPanier} />} /> 
            <Route exact path="/produits" element={<ProduitsCategory AddToPanier={this.AddToPanier} />} />
            <Route exact path="/produits/:category" element={<this.Produits_sendcategory />} />
            <Route exact path="/produit_details/:id" element={<ProduitDetails AddToPanier={this.AddToPanier}/>}/>
            <Route exact path="/search" element={<ProduitsCategory AddToPanier={this.AddToPanier} />} />
            <Route exact path="/search/:input" element={<this.Produits_sendsearch />} />
            <Route exact path="/commande" element={<Commande panier={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} RemFromPanier={this.RemFromPanier} ClearPanier={this.ClearPanier} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
     
    );
  }

  Produits_sendcategory = () =>{
    return(
      <ProduitsCategory AddToPanier={this.AddToPanier} category={useParams().category} />
    )
  }

  Produits_sendsearch = () =>{
    return(
      <ProduitsSearch AddToPanier={this.AddToPanier} search={useParams().input} />
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));