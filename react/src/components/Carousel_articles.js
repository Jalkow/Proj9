import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import Produit_preview from './Produit_preview';


function Carousel_articles(props){
    return(
        <Carousel interval={null}>
            {
              props.articles && props.articles.map((article,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Produit_preview key={i} article={article} AddToPanier={props.AddToPanier} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default Carousel_articles