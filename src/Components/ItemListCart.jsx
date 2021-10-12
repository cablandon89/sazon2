import React, {useState, useContext, useEffect} from 'react'

//Utiles
import { formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';

const ItemListCart = ({i}) => {
  const {store, updateItem, removeItem} = useContext(StoreContext);
  const [product, setProduct] = useState(store[i])
  const [quantity,setQuantity] = useState(store[i].quantity)
  const [total,setTotal] = useState(store[i].total)
  
  

  const sumar = () => {
    if(quantity < product.stock){
      setQuantity(quantity +1);
    };
  }

  const restar = () => {
    if(quantity > 1){
      setQuantity(quantity -1)   
    } 
  }
  
  const actualizarstore = () => {
    setTotal(quantity * product.amount);
    setProduct({...product, quantity: quantity, total: total})
    updateItem(product,i);
  }

  useEffect(() => {
    actualizarstore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[quantity])

  return (
    <tr className="align-middle text-nowrap">
      <td>{i+1} </td><td> <img className="w-50" src={'/assets/img/'+store[i].id+'.jpg'} alt="Foto del producto" /> </td><td className=""> {store[i].name} </td><td><i className="icon-minus pe-pointer" onClick={restar} /> {quantity} <i className="icon-plus pe-pointer" onClick={sumar}/></td><td> {formatCop.format(total)}</td><td><i className="icon-cancel pe-pointer" onClick={() => removeItem(i)}/></td>
    </tr>
  )
}

export default ItemListCart;
