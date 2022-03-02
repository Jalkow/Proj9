import React, {Component} from 'react';


class Produits extends Component{
    constructor(props) {
      super(props)
    }
    render() {
        console.log(this.props)
        if(this.props.loading) {
            return(
                <h2>Loading ...</h2>
            )
        }
        return(
            <>
            <h1>Hello</h1>
            <ul>
                {
                    this.props.articles && this.props.articles.map((article,i) =>{
                        return <li key={i}>{article.attributes.name}</li>
                    })
                }
            </ul>
            </>
        );
        
        
    }
}

export default Produits;

