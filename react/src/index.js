import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './style.css';
import Home from './Home';
import Produits from './components/Produits';
import Commande from './components/Commande';
import Produit_details from './components/Produit_details';
import { BrowserRouter,
         Route,
         Routes,
         useParams,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/Top_menu';
import Footer from './components/Footer';
import Produits_search from './components/Produits_search';


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
          <Routes>
            <Route exact path="/" element={<Home panier={this.state.panier} AddToPanier={this.AddToPanier} modalState={this.state.modalIsOpen} closeModal={this.closeModal} />} />
            <Route exact path="/produits" element={<Produits AddToPanier={this.AddToPanier} modalState={this.state.modalIsOpen} closeModal={this.closeModal}/>} /> 
            <Route exact path="/produits/:category" element={<this.Produits_category />} />
            <Route exact path="/produit_details/:id" element={<Produit_details AddToPanier={this.AddToPanier} modalState={this.state.modalIsOpen} closeModal={this.closeModal}/>}/>
            <Route exact path="/search" element={<Produits AddToPanier={this.AddToPanier} modalState={this.state.modalIsOpen} closeModal={this.closeModal}/>} /> 
            <Route exact path="/search/:input" element={<this.Produits_sendsearch />} />
            <Route exact path="/commande" element={<Commande panier={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} RemFromPanier={this.RemFromPanier} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
     
    );
  }

  Produits_category = () =>{
    return(
      <Produits AddToPanier={this.AddToPanier} category={useParams().category} modalState={this.state.modalIsOpen} closeModal={this.closeModal}/>
    )
  }

  Produits_sendsearch = () =>{
    return(
      <Produits_search AddToPanier={this.AddToPanier} search={useParams().input} modalState={this.state.modalIsOpen} closeModal={this.closeModal}/>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));