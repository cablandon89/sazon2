import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';

//css
import "./CardItemStyles.css";

const CardItem = ({key}) => {
  const [valueAdd, setValueAdd] = useState(1);

  const restar = () => {
    if(valueAdd > 1){
      setValueAdd(valueAdd -1)         
    } 
  }
  
  const sumar = () => {
    setValueAdd(valueAdd +1)         
    /* if(valueAdd < product.stock){
    }  */
  }
  
  const isInCart = (id) => {
    var index = -1;
    /* for(var i = 0;i<data.id.length;i++){
      if(data.id[i] == id){
        index = i;
      }
    } */
    return index;
  }
  
  const addToCart = () => {
    const id = 0;
    if(isInCart(id) >= 0){
       /* let cantidadesn = data.cantidades;
       let totaln = data.total - (product.amount * data.cantidades[isInCart(id)]); 
       cantidadesn[isInCart(id)] += valueAdd ;
       totaln = totaln + (product.amount * cantidadesn[isInCart(id)]);
       setData({
         ...data,
         cantidades: cantidadesn,
         total: totaln,
      }) */
    }else{
      /* setData({
        ...data, 
        id:[...data.id, id],
        cantidades: [...data.cantidades, valueAdd],
        items: [...data.items, product],
        total: data.total + (product.amount * valueAdd)
      }); */
    }
  }
  
  return (
    <>
      <Card key={key} style={{ width: "18rem", marginRight: 10 }} className="mt-3 text-center">
        <Card.Img variant="top" src="https://via.placeholder.com/200" alt="Foto del producto" />
        <Card.Body>
          <Card.Title>Nombre del producto</Card.Title>
          <Card.Text> Precio del producto </Card.Text>
          <div className="agregar">
            <i className="icon-minus" onClick={restar}/>
            <input type="text" value={valueAdd} readOnly/>
            <i className="icon-plus" onClick={sumar}/>
          </div>
          <Button variant="dark" className="mt-2" onClick={addToCart}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
} 

export default CardItem;