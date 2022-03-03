import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './style.css';
import App from './app';
import Produits from './components/produits';
import { BrowserRouter,
         Route,
         Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/top_menu';


class Root extends Component{

  constructor(props) {
    super(props)
    this.state={
       articles:[],
       loading:true
    }
  }

  async componentDidMount () {
    const response = await fetch('http://localhost:8080/api/Articles', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({
      articles:articles,
      loading:false
    });
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <TopMenu/>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/produits" element={<Produits articles={this.state.articles.data} loading={this.state.loading} />} />
          </Routes>
        </BrowserRouter>
      </>
     
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));