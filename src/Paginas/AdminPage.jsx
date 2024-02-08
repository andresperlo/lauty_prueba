
import React, { useEffect, useState } from 'react'
import axiosUrl from '../helps/axiosBase'
import TableC from '../Componentes/TableC'
import NavbarC from '../Componentes/NavbarC'
import FooterC from '../Componentes/FooterC'
import { Col, Container, Row } from 'react-bootstrap'


const AdminPage = () => {

  const [rockProduct,setRockProduct]=useState([])

  const rockAllP=async()=>{
    const dataProductRock= await axiosUrl.get("/productos")
    setRockProduct(dataProductRock.data.getAllProducts)
  }

  useEffect(()=>{
    rockAllP()
  },[])



  return (
    <>
    <div className='img-body'>
    <NavbarC/>
    <Container>
      <Row>
        <Col lg={"12"} sm={"12"} md={"12"}>
        <TableC  data={rockProduct}/>
        </Col>
      </Row>
    </Container>
    <FooterC/>
    </div>
    </>
  )
}

export default AdminPage