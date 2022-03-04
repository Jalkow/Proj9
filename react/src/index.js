import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import Produits from './components/Produits';
import { BrowserRouter,
         Route,
         Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/Top_menu';


class Root extends Component{

  constructor(props) {
    super(props)
    this.state={
       articles:[],
       loading:true,
       panier:[]
    }
  }

  AddToPanier = (article) =>{
    this.setState(prevState => ({
      panier: [...prevState.panier, article]
    }))
    console.log(this.state.panier);
  }

  async componentDidMount () {
    setTimeout(async () => {
    const response = await fetch('http://localhost:1337/api/Articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
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
          <TopMenu dropdown_content={this.state.panier}/>
          <Routes>
            <Route exact path="/" element={<App panier={this.state.panier} />} />
            <Route exact path="/produits" element={<Produits articles={this.state.articles.data} loading={this.state.loading} AddToPanier={this.AddToPanier} />} />
          </Routes>
        </BrowserRouter>
      </>
     
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));