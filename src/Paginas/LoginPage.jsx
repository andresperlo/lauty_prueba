import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarC from '../Componentes/NavbarC';
import '../css/LoginPage.css'
import Swal from 'sweetalert2'
import Redondos from "../Images/REDONDOS.jpg"
import FooterC from '../Componentes/FooterC';
import axiosUrl, { headboard } from '../helps/axiosBase';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';




const LoginPage = () => {
     const navigate=useNavigate()
     const [loginRock,setLoginRock]=useState({
        correoRock:"",
        passRock:""
    })

    const loginChange=(ev)=>{
        setLoginRock({...loginRock,[ev.target.name]:ev.target.value})
    }

    const loginRockUser= async (ev)=>{
          ev.preventDefault()
      try {
        const userLogin= await axiosUrl.post("/usuarios/login",{
          Correo:loginRock.correoRock,
          Contrasenia:loginRock.passRock
         },headboard)
         if (userLogin.data.Role==="user") {
           sessionStorage.setItem("token",JSON.stringify(userLogin.data.token))
           sessionStorage.setItem("role",JSON.stringify(userLogin.data.Role))
           sessionStorage.setItem("idUsuario",JSON.stringify(userLogin.data.idUsuario))
           Swal.fire({
             title: "Iniciando Sesion...",
             text: "Los redondos una de las bandas mas convocantes de Argentina",
             imageUrl: Redondos,
             imageWidth: 400,
             imageHeight: 200,
           });
           setTimeout(()=>{
             navigate("/user")
           },3000)
         }else{
           sessionStorage.setItem("token",JSON.stringify(userLogin.data.token))
           sessionStorage.setItem("role",JSON.stringify(userLogin.data.Role))
           sessionStorage.setItem("idUsuario",JSON.stringify(userLogin.data.idUsuario))
           Swal.fire({
             icon: "success",
             title: "Bienvenido Administrador",
             text: "Iniciando sesion...",
           });
           setTimeout(()=>{
             navigate("/admin")
           },3000)
         }  
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Por favor, intentalo nuevamente",
        });
      }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[newpass,setNewPass]=useState({
      Correo:'',
      Contrasenia:'',
      ContraseniaR:''
    })

    const handlePass=(ev)=>{
      setNewPass({...newpass,[ev.target.name]:ev.target.value})
    }

    const newPassRock=async(ev)=>{
      ev.preventDefault()
      try {
        if (newpass.Contrasenia===newpass.ContraseniaR) {
          const passRockNew= await axiosUrl.put(`/usuarios/pass`,{
            Correo:newpass.Correo,
            Contrasenia:newpass.Contrasenia,
          })
          if (passRockNew.status===200) {
            Swal.fire({
              icon: "success",
              title: "Contraseña restablecida",
              text: "Gracias por visitar FullRock",
            });
          }
        }
      } catch (error) {
        console.log(error)
      }
    }




  return (
    <>
    <div className='login-fondo'>
    <NavbarC/>
    <div className='d-flex justify-content-center mt-5'>
    <Form className='mt-5 style-form'>
      <h2 className='h2-rock-login'>Iniciar Sesion</h2>
    <Form.Group className="mb-3" controlId="loginCorreo">
      <Form.Label className='text-style-login' >Correo</Form.Label>
      <Form.Control type="email" onChange={loginChange} value={loginRock.correoRock}  placeholder="Ingrese su correo" name='correoRock'/>
    </Form.Group>

    <Form.Group className="mb-5" controlId="loginPass">
      <Form.Label className='text-style-login'>Contraseña</Form.Label>
      <Form.Control type="password"  onChange={loginChange} value={loginRock.passRock} placeholder="Ingrese una contraseña" name='passRock' />
    </Form.Group>

    <div className='d-flex justify-content-center'>
    <Button className='pass-rock' onClick={handleShow}>
      Haz olvidado tu contraseña? Restablecer contraseña
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>


        <Form.Group className="mb-3">
        <Form.Label>Ingrese su email</Form.Label>
        <Form.Control type="email"  placeholder="Ingrese su email" name='Correo'  value={newpass.Correo} onChange={handlePass}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Ingrese la nueva contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese la clave" name='Contrasenia'  value={newpass.Contrasenia} onChange={handlePass}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Repeti la contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese la nueva clave" name='ContraseniaR'  value={newpass.ContraseniaR} onChange={handlePass}/>
        </Form.Group>

        <Button variant="danger" type="submit" onClick={newPassRock}>
        Actualizar contraseña
        </Button>
    </Form>
        </Modal.Body>
      </Modal>
    </div>

    <Button className='button-style mt-5 mx-auto w-75' onClick={loginRockUser} variant="danger" type="submit">
      Iniciar Sesion
    </Button>
  </Form>
  </div>
  </div>
  <FooterC/>
  </>
  )
}

export default LoginPage