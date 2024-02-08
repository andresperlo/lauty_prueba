
import React from 'react';
import { Carousel } from 'react-bootstrap';
import CardC from './CardC';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/slider.css'

const SliderC = ({ productos }) => {
  return (
    <Carousel className='style-carousel'>
      {productos.map((card) => (
        <Carousel.Item key={card._id} className='style-carrusel' >
          <div className='d-flex justify-content-center'>
          <CardC title={card.Nombre} imageUrl={card.Imagen} content={card.Descripcion} idProduct={card._id} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderC;
