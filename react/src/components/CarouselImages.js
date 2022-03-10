import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import { strapi_host_url } from '../strapi';


function CarouselImages(props){
    return(
        <Carousel interval={null} className="images-carousel">
            {
              props.images && props.images.map((image,i) =>{
                return(
                  <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <img src={strapi_host_url + image.attributes.url} alt="carousel content" />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default CarouselImages