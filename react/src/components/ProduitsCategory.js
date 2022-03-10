import React, {Component} from 'react';
import { strapi_host_url } from '../strapi';
import ArticlesLoading from './ArticlesLoading';
import Produits from './Produits';

 class ProduitsCategory extends Component{
    constructor(props) {
      super(props)
      this.state={
            articles:[],
            loading:true,
      }
    }

    setArticlesToDisplay = async(category) =>{
        let url = strapi_host_url + "/api/Articles?populate=*";
        if (this.props.category){
            const qs = require('qs');
            const query = qs.stringify({
            filters: {
                category: {
                $eq: category
                },
            },
            }, {
            encodeValuesOnly: true,
            });
            url += '&' + query;
        } 

        const response = await fetch(url, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        this.setState({
          articles:articles.data,
          loading:false
        });
    }

    async componentDidMount () {
        this.setArticlesToDisplay(this.props.category);
    }

    
    async componentWillReceiveProps (nextProps) {
        if(nextProps.category === this.props.category){
            return;
        }
        this.setArticlesToDisplay(nextProps.category);
    }
    
    render() {
            
        if(this.state.loading) {
            return(
                <ArticlesLoading />
            );
        }
        
        return(
            <Produits articles={this.state.articles} AddToPanier={this.props.AddToPanier} />
        );
        
        
    }
}

export default ProduitsCategory;

