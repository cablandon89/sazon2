import { useState,useContext } from 'react';
import { Link } from "react-router-dom";
//Bootstrap
import {Card, Button} from 'react-bootstrap';
//Utiles
import { formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';
//css
import "./CardItemStyles.css";

const CardItem = ({id, name, amount, stock}) => {
  //State local
  const [valueAdd, setValueAdd] = useState(1);
  //Context 
  const {addItem} = useContext(StoreContext);
  //Función restar item
  const restar = () => {
    if(valueAdd > 1){
      setValueAdd(valueAdd -1)         
    } 
  }
  //Función para sumar y llega al tope del stock del producto
  const sumar = () => {
    if(valueAdd < stock){
      setValueAdd(valueAdd +1)         
    } 
  }
  
  return (
    <>
      <Card className="mt-3 text-center card border-0 shadow">
        <Link to={`/detalle/${id}`}><Card.Img variant="top" src={'/assets/img/'+id+'.jpg'} alt="Foto del producto" /></Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {formatCop.format(amount)} </Card.Text>
          <div className="agregar">
            <i className="icon-minus" onClick={restar}/>
            <input type="text" value={valueAdd} readOnly/>
            <i className="icon-plus" onClick={sumar}/>
          </div>
          <Button variant="dark" className="mt-2" onClick={() => addItem({id:id,name:name,quantity:valueAdd, total:(valueAdd*amount)})}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
} 

export default CardItem;