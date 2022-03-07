import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
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
      panier_total_price: prevState.panier_total_price + article.attributes.prix
    }))
  }

  RemFromPanier = (index) =>{
    let removed_article = this.state.panier.splice(index, 1)[0];
    this.setState(prevState => ({
      panier_total_price: prevState.panier_total_price- removed_article.attributes.prix
    }))
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <TopMenu dropdown_content={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} RemFromPanier={this.RemFromPanier}/>
          <Routes>
            <Route exact path="/" element={<App panier={this.state.panier} />} />
            <Route exact path="/produits" element={<Produits AddToPanier={this.AddToPanier} />} /> 
            {/* <Route exact path="/produits/:category" element={() => {return( <Produits AddToPanier={this.AddToPanier} category={useParams().category} />) }} /> */}
            <Route exact path="/produits/:category" element={<this.Produits_category />} />
            <Route exact path="/produit_details" element={<Produit_details />}/>
            <Route exact path="/commande" element={<Commande panier={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} />} />
          </Routes>
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