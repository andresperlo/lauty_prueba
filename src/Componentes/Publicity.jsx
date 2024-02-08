import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Coca from '../Images/coke-coca-cola.gif'
import Rock from '../Images/rock.gif'
import Pizza from '../Images/spinning-pizza.gif'
import 'css/Publicity.css'

const Publicity = () => {
    return (
        <Container>
          <Row>
            <Col className='d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
              <Image className='gif-style' src={Coca} rounded />
            </Col>
            <Col  className='d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
              <Image className='gif-style' src={Rock} rounded />
            </Col>
            <Col  className='d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
              <Image className='gif-style' src={Pizza} rounded />
            </Col>
          </Row>
        </Container>
      );
}

export default Publicity