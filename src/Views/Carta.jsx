import React,{useState, useEffect} from 'react'

import CardItem from '../Components/CardItem';
import LoaderPage from '../Components/Loader/LoaderPage';

const Carta = () => {
  const API = "https://backedsazon.herokuapp.com/products";
  const [data, setData] = useState([]);
  const fetchapi = async () => {
    try{
      const response = await fetch(API);
      const result = await response.json();
      setData(result);
    }catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchapi();
  },[]);
  
  return (
    <div>
      {
        data.length ?
        <>
          <h2>Todos nuestros productos</h2>
          <div className="card-item-list">
            {
              data.map((product,index) =>
                <CardItem key={index} id={product.id} name={product.name} amount={product.amount} stock={product.stock} img={product.img.url}  />
              )
            }
          </div>
        </>:
        <LoaderPage/>
      }
    </div>
  )
}

export default Carta;
