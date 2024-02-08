import React, { useEffect, useState } from 'react'
import NavbarC from '../Componentes/NavbarC'
import axiosUrl from '../helps/axiosBase'
import { Col, Container, Row } from 'react-bootstrap'
import TableD from '../Componentes/TableD'
import FooterC from '../Componentes/FooterC'
import '/css/TableD.css'

const AdminPageUser = () => {
  const [userData,setUserData]=useState([])
  const token=sessionStorage.getItem('token')
  const rockUser=async()=>{
    const config = {
      headers: {
        'Authorization': `${token}`
      }
    };
    const allRockU= await axiosUrl.get("/usuarios",config)
    setUserData(allRockU.data.getUserAll)
  }

  useEffect(()=>{
    rockUser()
  },[])

  return (
    <div className='style-table'>
    <>
    <NavbarC/>
    <Container>
      <Row>
        <Col lg={"12"} sm={"12"} md={"12"}>
        <TableD data={userData} />
        </Col>
      </Row>
    </Container>
    <FooterC/>
    </>
    </div>
  )
}

export default AdminPageUser