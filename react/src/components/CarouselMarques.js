import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import MarqueInfos from './MarqueInfos';


function CarouselMarques(props){
    return(
        <Carousel interval={null}>
            {
              props.marques && props.marques.map((marque,i) =>{
                return(
                  <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <MarqueInfos marque={marque} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default CarouselMarques