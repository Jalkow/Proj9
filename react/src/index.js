import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Produits from './components/Produits';
import { BrowserRouter,
         Route,
         Routes
} from 'react-router-dom';


const Root = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/produits" element={<Produits />} />
    </Routes>
  </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));