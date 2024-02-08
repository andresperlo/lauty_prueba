import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import NavbarC from '../Componentes/NavbarC';
import Soda from "/Images/SODA.JPG";
import '../css/RegisterPage.css'
import { Col, Container, Row } from 'react-bootstrap';
import FooterC from '../Componentes/FooterC';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
   const navigate=useNavigate()
    const [formRegister,setFormRegister]=useState({
        NombreRock:"",
        NacionalidadRock:"",
        CorreoRock:"",
        ContraseniaRock:"",
        RcontraseniaRock:""

    })

   const registerChange=(ev)=>{ 
   setFormRegister({...formRegister,[ev.target.name]:ev.target.value});
}

 const goRegister= async (ev)=>{
    ev.preventDefault()
const{NombreRock,NacionalidadRock,CorreoRock,ContraseniaRock,RcontraseniaRock}=formRegister
if (!NombreRock || !NacionalidadRock || !CorreoRock || !ContraseniaRock || !RcontraseniaRock) {
    Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Por favorr completa todos los campos!",
      });
}else if (ContraseniaRock===RcontraseniaRock){
    const RockRegister= await fetch("http://localhost:3001/usuarios",{
        method:"Post",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            Nombre:NombreRock,
            Nacionalidad:NacionalidadRock,
            Correo:CorreoRock,
            Contrasenia:ContraseniaRock
        })
    })
    const rockUserNew= await RockRegister.json()
   if (rockUserNew) {
    Swal.fire({
        title: "Gracias por registrarse!",
        text: "Soda Stereo una de las bandas mas iconicas de Latino America",
        imageUrl: Soda,
        imageWidth: 400,
        imageHeight: 200,
      });
      setTimeout(()=>{
         navigate("/login")
      },3000)
   }
}else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contrasenias no coinciden!",
      });
}

}


  return (
 <>
 <div className='register-page-container'>
 <NavbarC/>
 <Container>
      <Row>
         <Col sm={"12"}>
         <div className='d-flex justify-content-center mt-5'>
       <Form className='form-style'>
      <h2 className='h2-rock-register'>Registrarse</h2>
      <Form.Group className="mb-3" controlId="NombreInfo">
         <Form.Label className='register-style'>Nombre</Form.Label>
         <Form.Control type="text" value={formRegister.Nombre} onChange={registerChange} placeholder="Ingrese su Nombre" name='NombreRock' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nacionalidadInfo">
         <Form.Label className='register-style'>Nacionalidad</Form.Label>
         <Form.Control type="text" value={formRegister.Nacionalidad} onChange={registerChange} placeholder="Ingrese su nacionalidad" name='NacionalidadRock' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="correoInfo">
         <Form.Label className='register-style'>Correo Electronico</Form.Label>
         <Form.Control type="email" value={formRegister.Correo} onChange={registerChange} placeholder="Ingrese su correo" name='CorreoRock' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="passInfo">
         <Form.Label className='register-style'>Contraseña</Form.Label>
         <Form.Control type="password" value={formRegister.Contrasenia} onChange={registerChange} placeholder="Ingrese una contraseña" name='ContraseniaRock' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rPassInfo">
         <Form.Label className='register-style'>Repetir Contraseña</Form.Label>
         <Form.Control type="password" value={formRegister.Rcontrasenia} onChange={registerChange} placeholder="Ingrese una contraseña" name='RcontraseniaRock' />
      </Form.Group>
      <Button className='register-buttom mt-5 mx-auto w-75' onClick={goRegister} variant="danger" type="submit">
         Registrarse
      </Button>
   </Form>
      </div>
    </Col>
   </Row>
   </Container>
</div>
<FooterC/>
 </>
  )
}

export default RegisterPage