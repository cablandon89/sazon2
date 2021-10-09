import React, {useState, useContext, useEffect} from 'react'

//Utiles
import { fetchApiItem, formatCop } from '../Utiles/utiles';
//Context
import StoreContext from  '../Context/Store';

const ItemListCart = ({i}) => {
  const {store, updateItem, removeItem} = useContext(StoreContext);
  const [quantity,setQuantity] = useState(store[i].quantity)
  const [total,setTotal] = useState(store[i].total)
  const [data,setData] = useState();
  
  let amount = (data == null)?(store[i].total / store[i].quantity):data.amount;
  let stock = (data == null)?store[i].quantity:data.stock;


  const sumar = () =>  {
    if(quantity < stock){
      setQuantity(quantity +1);
    }
  }

  const restar = () => {
    if(quantity > 1){
      setQuantity(quantity -1)         
    } 
  }



  useEffect(() => {
    fetchApiItem(setData,store[i].id);
  },[]);

  useEffect(() => {
    setTotal(quantity * amount);
    let nobj = store[i];
    nobj.quantity = quantity;
    nobj.total = total;
    updateItem(nobj,i);
  },[quantity])

  return (
    <tr className="align-middle text-nowrap">
      <td>{i+1} </td><td> <img className="w-50" src={'/assets/img/'+store[i].id+'.jpg'} alt="Foto del producto" /> </td><td className=""> {store[i].name} </td><td><i className="icon-minus pe-pointer" onClick={restar} /> {quantity} <i className="icon-plus pe-pointer" onClick={sumar}/></td><td> {formatCop.format(total)}</td><td><i className="icon-cancel pe-pointer" onClick={() => removeItem(i)}/></td>
    </tr>
  )
}

export default ItemListCart;
