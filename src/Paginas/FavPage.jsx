import React, { useEffect, useState } from 'react'
import axiosUrl from '../helps/axiosBase'
import NavbarC from '../Componentes/NavbarC'
import { Col, Container, Row } from 'react-bootstrap';
import FooterC from '../Componentes/FooterC';
import "../css/Fav.css"
import CardC from '../Componentes/CardC';

const FavPage = () => {
    const rockData=JSON.parse(sessionStorage.getItem('idUsuario'))

    const[productFav,setProductFav]=useState([])

    const getFavRock=async()=>{
        const token=sessionStorage.getItem('token')
        const config = {
            headers: {
              'Authorization': `${token}`
            }
          };
        const rockFav= await axiosUrl.get("/fav",config)

        const findRock=rockFav.data.getAllFav.find((data)=>data.idUsuario===rockData)

        setProductFav(findRock.favoritos)
    }

useEffect(()=>{
    getFavRock()
},[])


  return (
    <>
    <div className='body-stone'>
    <NavbarC/>
    <Container className='my-5'>
        <Row>
        {productFav.map((data)=>(
            <Col className='my-5 d-flex justify-content-center aling-items-center' sm={"12"} md={"4"} lg={"4"} key={data._id}>
           <CardC imageUrl={data.Imagen} idPage='favPage' idDelete={data._id}/>
            </Col>
           ))}
        </Row>
    </Container>
    </div>
    </>
  )
}

export default FavPage