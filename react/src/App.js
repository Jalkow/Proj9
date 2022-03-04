import React, { Component } from 'react';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.props.panier && this.props.panier.map((panier,i) =>{
            return(
              <h2 key={i}>{panier.attributes.name}</h2>
            );
          })
        }
        </header>
      </div>
    );
  }
}

export default App;
