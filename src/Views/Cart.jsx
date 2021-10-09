import {useContext} from 'react'
import {useHistory} from 'react-router-dom';
//Components
import ItemListCart from '../Components/ItemListCart'
//bootstrap
import {Container, Card, Button, Col, Row, Table,Form} from 'react-bootstrap';
//Utiles
import { formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';

const Carrito = () => {
  //Context 
  const {store} = useContext(StoreContext);

  const history = useHistory();
  const goCart = () => {
    history.push("/pagar");
  }

  return (
    <>
    {
      store.length ?
        <>
          <Container className="mt-3  " >
            <Card className="w-100 text-center border-0 shadow p-2">
              <Card.Title>Carrito</Card.Title>
              <Row>
                <Col>
                  <Table size="sm" >
                    <thead><tr><th colSpan="3" className="w-25">Producto</th><th>Cantidad</th><th>Subtotal</th><th></th></tr></thead>
                    <tbody>
                    {
                      store.map((item,index) => 
                        <ItemListCart key={index} i={index} />
                      )
                    }
                    </tbody>
                  </Table>
                  
                
                </Col>
                <Col>
                  <Card.Title>Resumen</Card.Title>
                  <Row className="p-2" >
                    <Col className="text-start">Items: {store.reduce((sum,value) => (sum + value.quantity),0)} </Col>
                    <Col className="text-end fw-bold"> {formatCop.format(store.reduce((sum,value) => (sum + value.total),0))}</Col>
                  </Row>
                  <Form.Group className="mt-2 text-start">
                    <Form.Label>Codigo promocional</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                    <hr/>
                    <Row className="p-2" >
                    <Col className="text-start">Total a pagar </Col>
                    <Col className="text-end fw-bold"> {formatCop.format(store.reduce((sum,value) => (sum + value.total),0))}</Col>
                  </Row>
                  <Button onClick={goCart} variant="dark" className="mt-2 w-100">Ir a pagar</Button>
                </Col>
              </Row>

            </Card>
          </Container>
        </>:
        <h1>Su carrito de compras se encuentra vacío</h1>
    }
    </>
  )
}

export default Carrito