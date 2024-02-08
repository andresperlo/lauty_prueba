import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../Images/GunsRoses.jpg";
import imagen2 from "../Images/Nirvana.jpg";
import imagen3 from "../Images/Queen.jpg";


const CarruselC = () => {
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={imagen1} width={'100%'} alt="Guns N' Roses" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen2} width={'100%'} alt="Nirvana" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen3} width={'100%'} alt="Queen" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarruselC;
