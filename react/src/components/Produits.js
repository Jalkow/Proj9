import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';

class Produits extends Component{
    constructor(props) {
      super(props)
    }
    render() {
        console.log(this.props)
        if(this.props.loading) {
            return(
                <Spinner animation="border" variant="info" />
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

