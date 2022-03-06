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
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/Top_menu';


class Root extends Component{

  constructor(props) {
    super(props)
    this.state={
       articles:[],
       loading:true,
       panier:[],
       panier_total_price:0
    }
  }

  AddToPanier = (article) =>{
    this.setState(prevState => ({
      panier: [...prevState.panier, article],
      panier_total_price: this.state.panier_total_price + article.attributes.prix
    }))
  }

  async componentDidMount () {
    setTimeout(async () => {
    const response = await fetch('http://localhost:8080/api/Articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({
      articles:articles,
      loading:false
    });
    }, 2000);
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <TopMenu dropdown_content={this.state.panier} total_prix_articles_panier={this.state.panier_total_price}/>
          <Routes>
            <Route exact path="/" element={<App panier={this.state.panier} />} />
            <Route exact path="/produits" element={<Produits articles={this.state.articles.data} loading={this.state.loading} AddToPanier={this.AddToPanier} />} />
            <Route exact path="/produit_details" element={<Produit_details />}/>
            <Route exact path="/commande" element={<Commande panier={this.state.panier} total_prix_articles_panier={this.state.panier_total_price} />} />
          </Routes>
        </BrowserRouter>
      </>
     
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));