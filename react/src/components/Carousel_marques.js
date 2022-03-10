import React from 'react';
import { Col, Row, Carousel} from 'react-bootstrap';
import Marque_infos from './Marque_infos';


function Carousel_marques(props){
    return(
        <Carousel interval={null}>
            {
              props.marques && props.marques.map((marque,i) =>{
                return(
                  <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                      <Col xs={8}>
                        <Marque_infos marque={marque} />
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })
            }
        </Carousel>
    );
}

export default Carousel_marques