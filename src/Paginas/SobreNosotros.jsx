import React from 'react';
import NavbarC from '../Componentes/NavbarC';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Yo from "../Images/yo.png";
import HTML from "../Images/HTML.png"
import CSS from "../Images/CSS.png"
import JS from "../Images/JS.png"
import NODE from "../Images/NODE.png"
import MONGODB from "../Images/MONGODB.jpg"
import REACT from "../Images/REACT.jpg"
import TRELLO from "../Images/TRELLO.png"
import GITHUB from "../Images/github.jpg"
import GIT from "../Images/GIT.png"
import 'css/SobreNosotros.css';
import FooterC from '../Componentes/FooterC';

const SobreNosotros = () => {
  return (
    <>
    <div className='background-mi'>
      <NavbarC />
      <Container className='mt-5 d-flex justify-content-center align-items-center'>
        <Row>
          <Col sm={"12"} md={"12"} lg={"12"}>
            <Image className='img-yo' src={Yo} roundedCircle />
          </Col>
        </Row>
      </Container>
      <Container className='text-container mb-5'>
        <h1 className='text-center my-5 style-name'>Lautaro Maldonado, Desarrollador Web</h1>
        <p className='text-infoo mb-3'>¡Hola! Soy Lautaro Maldonado, un apasionado estudiante de programación, enfocado especialmente en el desarrollo web. Con 23 años y originario de Buenos Aires, Argentina, he dedicado mi tiempo a explorar y perfeccionar mis habilidades en el vasto mundo de la tecnología. Mi conjunto de habilidades abarca varios aspectos del desarrollo web, incluyendo JavaScript, Node.js, React, HTML, y CSS. Además, estoy familiarizado con herramientas esenciales para la colaboración y el control de versiones como Git y GitHub. En mis proyectos, empleo prácticas ágiles y organizativas, utilizando herramientas como Postman para la prueba de APIs, MongoDB para la gestión de bases de datos, y Trello para la organización eficiente de tareas. Me apasiona contribuir al crecimiento de la web y la tecnología, y estoy constantemente buscando aprender y mejorar mis habilidades. ¡Estoy emocionado por las oportunidades que la programación ofrece y listo para enfrentar nuevos desafíos!</p>
      </Container>
<Container>
  <Row>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={HTML} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={CSS} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={JS} rounded />
    </Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={MONGODB} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={REACT} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={NODE} rounded />
    </Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={TRELLO} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={GIT} rounded />
    </Col>
    <Col className='mb-3 d-flex justify-content-center align-items-center' sm={"12"} md={"4"} lg={"4"}>
      <Image className='img-tec' src={GITHUB} rounded />
    </Col>
  </Row>
</Container>
      <FooterC />
      </div>
    </>
  );
}

export default SobreNosotros;
