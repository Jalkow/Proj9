import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import Produit_preview from './Produit_preview';


function Carousel_images(props){
    return(
        <Carousel interval={null} className="images-carousel">
            {
              props.images && props.images.map((image,i) =>{
                return(
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <img key={i} src={"http://localhost:8080" + image.attributes.url} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default Carousel_images