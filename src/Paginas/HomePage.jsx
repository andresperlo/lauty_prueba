import React, { useEffect, useState } from 'react'
import CarruselC from '../Componentes/CarruselC'
import axiosUrl from '../helps/axiosBase'
import SliderC from '../Componentes/SliderC'
import "../Css/NavbarC.css"
import NavbarC from '../Componentes/NavbarC'
import Accordion from 'react-bootstrap/Accordion';
import "../Css/HomePage.css"
import FooterC from '../Componentes/FooterC'
import Publicity from '../Componentes/Publicity'



const HomePage = () => {
  
  const [productos,setProductos]=useState([])

  const allGetProductos=async()=>{
 try {
  const rockProducts= await axiosUrl.get("/productos")
  setProductos(rockProducts.data.getAllProducts)

 } catch (error) {
  console.log("ERROR AL ENCONTRAR PRODUCTOS",error)
 }
  }


  useEffect(()=>{
   allGetProductos()
  },[])

  


  return (
  <>
  <h1 className='h2-homepage'>Tienda Full Rock</h1>
  <NavbarC/>
  <div className='contenedor-carrosuel'>
  <CarruselC/>
  </div>
  <div className='contenedor-carrosuel'>
        {productos.length > 0 ? (
          <SliderC productos={productos} />
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
      <Accordion className='definit-color' defaultActiveKey={null} >
      <Accordion.Item eventKey="0">
        <Accordion.Header className='mx-auto '><h2 className='me-auto h2-rock'>Rock en nuestras venas, y nuestra tienda!!</h2></Accordion.Header>
        <Accordion.Body className='p-rock'>
        ¡Bienvenido a Full Rock, tu destino definitivo para la moda con actitud! Descubre el espíritu rebelde y la esencia del rock en cada costura. Nuestra tienda de ropa Full Rock es un santuario para los amantes del estilo audaz y la música estridente. Sumérgete en un mundo de diseños audaces y cortes vanguardistas que capturan la esencia del rock desde las raíces hasta la cima. Desde camisetas con estampados icónicos hasta chaquetas que gritan rebeldía, cada prenda cuenta una historia de libertad y expresión. En Full Rock, la moda no es solo una elección, ¡es una declaración! Nuestro compromiso con la autenticidad y la calidad se refleja en cada puntada. Ya sea que estés buscando el atuendo perfecto para tu concierto favorito o simplemente quieras canalizar tu energía rockera en la vida cotidiana, aquí encontrarás la pieza que necesitas. Abre las puertas de Full Rock y descubre la moda que hace latir tu corazón al ritmo del rock. ¡Únete a la revolución de la moda con Full Rock, donde la actitud y el estilo son siempre a todo volumen!"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='mx-auto header-acordion'><h2 className='me-auto h2-rock'>Que Ofrecemos?</h2></Accordion.Header>
        <Accordion.Body className='p-rock'>
        En Full Rock, la moda es más que ropa, es una forma de vida. Explora nuestra colección y encuentra no solo prendas, sino expresiones auténticas del espíritu del rock. ¡Únete a la revolución de estilo en Full Rock, donde la moda rockera cobra vida!". En nuestra coleccion ofrecemos, Camperas, Remeras, Buzos,Chalinas,Bandanas, Aritos,Jeans y mucho mas!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='mx-auto  header-acordion'><h2 className='me-auto h2-rock'>Donde nos ubicamos?</h2></Accordion.Header>
        <Accordion.Body className='p-rock'>
        Full Rock es más que una tienda de moda, es un destino global para los amantes del rock en todas partes. Nuestras raíces se extienden por todo el mundo, con presencia destacada en Tucumán y Buenos Aires, Argentina, así como en destinos internacionales. En Tucumán, sumérgete en la esencia del rock en nuestro establecimiento local. Encuéntranos en el corazón de la ciudad, donde la pasión por la música y el estilo se fusionan en cada prenda que ofrecemos. En Buenos Aires, la ciudad que nunca duerme, también estamos presentes para aquellos que buscan expresar su individualidad a través de la moda rockera. Descubre nuestras colecciones y déjate llevar por la energía vibrante de la capital.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='mx-auto  header-acordion'><h2 className='me-auto h2-rock'>Cual es nuestra mision?</h2></Accordion.Header>
        <Accordion.Body className='p-rock'>
        nuestra misión es llevar la esencia apasionada y vibrante del mundo del rock directamente a nuestros clientes. Nos esforzamos por ser mucho más que una simple tienda de e-commerce; buscamos ser el destino definitivo para los amantes del rock, donde la música, la moda y la cultura se fusionan en una experiencia única.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       <div className='publicity-column pb-3'>
          <Publicity />
        </div>
     <FooterC/>
  </>
  )
}

export default HomePage