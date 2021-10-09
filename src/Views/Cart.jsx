import {useContext} from 'react'
//Components

//bootstrap
import {Container, Card, Button, Col, Row, Table} from 'react-bootstrap';
//Utiles
import { formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';

const Cart = () => {
  //Context 
  const {store} = useContext(StoreContext);
  return (
    <>
    {
      store.length ?
        <>
          <Container className="mt-3  " >
            <Card className="w-100 text-center border-0 shadow">
              <Card.Title>Carrito</Card.Title>
              <Row>
                <Col>
                  <Table size="sm" >
                    <tbody>
                    {
                      store.map((item,index) => 

                      <tr className="align-middle">
                        <td>{index+1} </td><td> <img className="w-25" src={'/assets/img/'+item.id+'.jpg'} alt="Foto del producto" /> </td><td className="text-nowrap"> {item.name} </td><td> {item.quantity} </td><td> {formatCop.format(item.total)}</td>
                      </tr>
                      )
                    }
                    </tbody>
                  </Table>
                  
                
                </Col>
                <Col>
                  <Card.Body>
                  </Card.Body>
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

export default Cart