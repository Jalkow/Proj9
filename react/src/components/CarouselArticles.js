import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import ProduitPreview from './ProduitPreview';


function CarouselArticles(props){
    return(
        <Carousel interval={null}>
            {
              props.articles && props.articles.map((article,i) =>{
                return(
                  <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <ProduitPreview article={article} AddToPanier={props.AddToPanier} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default CarouselArticles