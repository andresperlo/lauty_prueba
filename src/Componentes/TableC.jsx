import React from 'react';
import Table from 'react-bootstrap/Table';
import "../css/TableC.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axiosUrl, { headboard } from '../helps/axiosBase';


const TableC = ({ data }) => {

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    const handleShow = (Rockid) =>{
      setShow(true)
     const rockProduct=data.find((info)=>info._id===Rockid)
     setState(rockProduct)
    };

    const [state, setState] = useState({
      Nombre: '',
      Marca: '',
      Precio: '',
      Imagen: ''
    });
    


    const handleChage=(ev)=>{
      setState({...state,[ev.target.name]:ev.target.value})
    }

    const editProductRock = async (ev) => {
      const token=sessionStorage.getItem('token')
      ev.preventDefault();
      try {
        const config = {
          headers: {
            'Authorization': `${token}`
          }
        };
        const sendPost = await axiosUrl.put(`/productos/${state._id}`, {
          Nombre: state.Nombre,
          Marca: state.Marca,
          Descripcion:state.Descripcion,
          Precio: state.Precio,
          Imagen: state.Imagen
        },config,headboard);
    
        if (sendPost.status === 200) {
          alert("Producto actualizado");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    };

    const deleteProduct= async (id)=>{
      const token=sessionStorage.getItem('token')
     try {
      const config = {
        headers: {
          'Authorization': `${token}`
        }
      };
      const confirmDelete=confirm("Estas seguro de borrar este producto?")
      if (confirmDelete) {
        const rockDelete= await axiosUrl.delete(`/productos/${id}`,config)
        if (rockDelete.status===200) {
          alert("Producto eliminado correctamente")
          location.reload()
        }
      }
     } catch (error) {
      console.log(error)
     }

    }
    
  

 
  return (
    <div className='d-flex justify-content-center body-table '>
      <Table striped bordered hover size="sm" className='w-100 my-5'>
        <thead>
          <tr>
            <th  className='style-title '>Nombre</th>
            <th  className='style-title'>Marca</th>
            <th  className='style-title'>Precio</th>
            <th  className='style-title'>Imagen</th>
            <th  className='style-title'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info) => (
              <tr className='font-style' key={info._id}>
              <td className='font-style'>{info.Nombre}</td>
              <td className='font-style'>{info.Marca}</td>
              <td className='font-style'>{info.Precio}</td>
              <td className='font-style'><img className='style-img' src={info.Imagen} alt="Producto"/></td>
              <td>
              <Button className='button-flex' variant="warning" onClick={()=>handleShow(info._id)}>Editar</Button>
              <Button className='button-flex' variant="danger" onClick={()=>deleteProduct(info._id)}>Eliminar</Button>

             <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
             <Modal.Title>Edicion de producto</Modal.Title>
             </Modal.Header>

             <Modal.Body>
             <Form>

             <Form.Group className="mb-3">
             <Form.Label>Nombre</Form.Label>
             <Form.Control type="text" placeholder="Ingresa un nombre" name='Nombre' value={state.Nombre} onChange={handleChage}/>
             </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
           <Form.Control type="text" placeholder="Ingresa la marca"  name='Marca' value={state.Marca} onChange={handleChage} />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
           <Form.Control type="text" placeholder="Ingresa la descripcion"  name='Descripcion' value={state.Descripcion} onChange={handleChage} />
           </Form.Group>

           
           <Form.Group className="mb-3" >
            <Form.Label>Precio</Form.Label>
           <Form.Control type="number" placeholder="Ingresa el precio"  name='Precio' value={state.Precio} onChange={handleChage}/>
           </Form.Group>

           
           <Form.Group className="mb-3" >
            <Form.Label>Imagen</Form.Label>
           <Form.Control type="text" placeholder="Ingresa la URL"  name='Imagen' value={state.Imagen} onChange={handleChage} />
           </Form.Group> 

           <Button variant="primary" type="submit" onClick={editProductRock}>
            Editar Producto
           </Button>
            </Form>
             </Modal.Body>
             </Modal>
            </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableC;
