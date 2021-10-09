import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom';
//bootstrap
import {Container, Card, Button, Col, Row, Table,Form, Modal} from 'react-bootstrap';
//Utiles
import { formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';

const Pagar = () => {
  //Context 
  const {store, emptyCart} = useContext(StoreContext);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const confirm = () => {
    emptyCart();
    history.push("/");
  }

  return (
    <>
    {
      store.length ?
        <>
          <Container className="mt-3  " >
            <Card className="w-100 text-center border-0 shadow p-2">
              <Card.Title>Confirmar compra</Card.Title>
              <Row>
                <Col>
                  <Table size="sm" >
                    <thead><tr><th colSpan="3" className="w-25">Producto</th><th>Cantidad</th><th>Subtotal</th><th></th></tr></thead>
                    <tbody>
                    {
                      store.map((item,index) => 
                      <tr key={index} className="align-middle text-nowrap">
                        <td>{index+1} </td><td> <img className="w-50" src={'/assets/img/'+item.id+'.jpg'} alt="Foto del producto" /> </td><td className=""> {item.name} </td><td>{item.quantity} </td><td> {formatCop.format(item.total)}</td><td></td>
                      </tr>
                      )
                    }
                    <tr className="fw-bold"><th colSpan="4" className="text-end">Total:</th><td>{formatCop.format(store.reduce((sum,value) => (sum + value.total),0))}</td></tr>
                    </tbody>
                  </Table>
                
                </Col>
                <Col>
                  <Card.Title>Información del pago</Card.Title>
                  
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label >Teléfono</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Medio de pago</Form.Label>
                    <Form.Select >
                      <option value="">Seleccione uno</option>
                      <option value="">PSE</option>
                      <option value="">Tarjeta de crédito</option>
                      <option value="">Google Pay</option>
                      <option value="">Efectivo</option>
                    </Form.Select>
                  </Form.Group>
                    <hr/>
                  <Button variant="dark" className="mt-2 w-100" onClick={ () => setShow(true)}>Pagar</Button>
                </Col>
              </Row>

            </Card>
          </Container>
          <Modal show={show} backdrop="static" keyboard="false" centered>
            <Modal.Header >
              <Modal.Title>Finalizando la transacción</Modal.Title>
            </Modal.Header>
            <Modal.Body>Gracias por comprar en sazón cafetero, en aproximadamente 40 min estará llegando su pedido</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={ () => confirm()}>
                Regresar a la tienda
              </Button>
            </Modal.Footer>
          </Modal>
        </>:
        <h1>No hay elementos para realizar el pago</h1>
    }
    </>
  )
}

export default Pagar