import React, {Component} from 'react';
import { useLocation } from 'react-router-dom';

function Produit_details() {
    let location = useLocation();

    return(
        <h2>{location.state.article.attributes.name}</h2>
    );
}


export default Produit_details