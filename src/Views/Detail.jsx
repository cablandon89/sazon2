import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom';
//Components
import LoaderPage from '../Components/Loader/LoaderPage';
//bootstrap
import {Container, Card, Button, Col, Row} from 'react-bootstrap';
//Utiles
import { fetchApiItem, formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';


const Detail = () => {
  const {id} = useParams();

  const [data,setData] = useState(null);
  const [valueAdd, setValueAdd] = useState(1);

  //Función restar item
  const restar = () => {
    if(valueAdd > 1){
      setValueAdd(valueAdd -1)         
    } 
  }
  //Función para sumar y llega al tope del stock del producto
  const sumar = () => {
    if(valueAdd < data.stock){
      setValueAdd(valueAdd +1)         
    } 
  }

  const {store, addItem} = useContext(StoreContext);
  //UseEffect para la api
  useEffect(() => {
    fetchApiItem(setData,id);
  },[]);
 
  return (
    <>
    {
      data != null ?
        <>
          <Container className="mt-3  " >
            <Card className="w-100 text-center border-0 shadow">
              <Row>
                <Col>
                <Card.Img className="img-fluid rounted-start" src={'/assets/img/'+id+'.jpg'} alt="Foto del producto" />
                </Col>
                <Col>
                  <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text> {data.description} </Card.Text>
                  <Card.Title>Precio : {formatCop.format(data.amount)} </Card.Title>
                  <Card.Text>Cantidad disponible {data.stock} </Card.Text>
                  <Card.Text><small className="text-muted">{store.some(item => item.id === data.id)?'Ya esta en tu carrito':''}</small></Card.Text>
                  <div className="agregar">
                    <i className="icon-minus" onClick={restar}/>
                    <input type="text" value={valueAdd} readOnly/>
                    <i className="icon-plus" onClick={sumar}/>
                  </div>
                    <Button variant="dark" className="mt-5 w-100" onClick={() => addItem({id:data.id,name:data.name,quantity:valueAdd, total:(valueAdd*data.amount)})}>{store.some(item => item.id === data.id)?'Agregar mas':'Agregar al carrito'}</Button>
                  </Card.Body>
                </Col>
              </Row>

            </Card>
          </Container>
        </>:
        <LoaderPage/>
    }
    </>
  )
}

export default Detail;