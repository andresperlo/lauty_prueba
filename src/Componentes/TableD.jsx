import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axiosUrl, { headboard } from '../helps/axiosBase';



const TableD = ({data}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const [edit,setEdit]=useState({
        Nombre:'',
        Correo:'',
        Nacionalidad:'',
        Role:''
    })


    const handleShow = (idUser) =>{
        setShow(true)
        const updateRock=data.find((rock)=>rock._id===idUser)
        setEdit(updateRock)
    }

    const editCHange=(ev)=>{
        setEdit({...edit,[ev.target.name]:ev.target.value})
    }

    const postEdit= async (ev)=>{
        ev.preventDefault()
        const token=sessionStorage.getItem('token')
        try {
          const config = {
            headers: {
              'Authorization': `${token}`
            }
          };
            const RockFull= await axiosUrl.put(`/usuarios/${edit._id}`,{
                Nombre:edit.Nombre,
                Correo:edit.Correo,
                Nacionalidad:edit.Nacionalidad,
                Role:edit.Role
            },config,headboard)
            if (RockFull.status===200) {
                alert("Producto Actualizado")
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser=async(id)=>{
      const token=sessionStorage.getItem('token')
        try {
          const config = {
            headers: {
              'Authorization': `${token}`
            }
          };
            const confirmDelete=confirm("Seguro deseas eliminar este usuario?")
            if (confirmDelete) {
                const RockDelete=await axiosUrl.delete(`/usuarios/${id}`,config)
                if (RockDelete.status===200) {
                    alert("Usuario eliminado correctamente")
                    location.reload()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='d-flex justify-content-center body-table'>
    <Table striped bordered hover className='my-5 w-100 '>
    <thead>
      <tr>
        <th className='style-font'>Nombre</th>
        <th className='style-font'>Correo</th>
        <th className='style-font'>Role</th>
        <th className='style-font'>Acciones</th>
      </tr>
    </thead>
    <tbody>
  {data.map((info)=>(
  <tr key={info._id}>
  <td className='font-style'>{info.Nombre}</td>
  <td className='font-style '>{info.Correo}</td>
  <td className='font-style'>{info.Role}</td>
  <td>
  <>
      <Button className=' buttonD' variant="warning" onClick={()=>handleShow(info._id)}>
        Editar
      </Button>

      <Button disabled={info.Role==="admin"} className='buttonD' variant="danger" onClick={()=>deleteUser(info._id)}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Bienvenido a Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre" name='Nombre' value={edit.Nombre} onChange={editCHange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingresa el correo" name='Correo' value={edit.Correo} onChange={editCHange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la nacionalidad" name='Nacionalidad' value={edit.Nacionalidad} onChange={editCHange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el role"  name='Role' value={edit.Role} onChange={editCHange} />
        </Form.Group>

      <Button variant="warning" type="submit" onClick={postEdit}>
        Enviar
      </Button>
      </Form>
      </Modal.Body>
      </Modal>
    </>
  </td>
</tr>
  ))}
 </tbody>
  </Table>
  </div>
  )
}

export default TableD