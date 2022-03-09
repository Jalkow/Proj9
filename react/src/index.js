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


class Root extends Component{

  constructor(props) {
    super(props)
    this.state={
       panier:[],
       panier_total_price:0
    }
  }

  AddToPanier = (article) =>{
    this.setState(prevState => ({
      panier: [...prevState.panier, article],
      panier_total_price: prevState.panier_total_price + (article.attributes.prix - (article.attributes.prix/100 * article.attributes.reduction))
    }))
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
            <Route exact path="/" element={<Home panier={this.state.panier} AddToPanier={this.AddToPanier} />} />
            <Route exact path="/produits" element={<Produits AddToPanier={this.AddToPanier} />} /> 
            <Route exact path="/produits/:category" element={<this.Produits_category />} />
            <Route exact path="/produit_details/:id" element={<Produit_details AddToPanier={this.AddToPanier}/>}/>
            <Route exact path="/commande" element={<Commande panier={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} RemFromPanier={this.RemFromPanier} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
     
    );
  }

  Produits_category = () =>{
    return(
      <Produits AddToPanier={this.AddToPanier} category={useParams().category} />
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));