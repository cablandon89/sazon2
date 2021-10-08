import React, {useState, useEffect} from 'react'

//Components
import Carousel from '../Components/Carousel';
import CardItem from '../Components/CardItem';

import LoaderPage from "../Components/Loader/LoaderPage";

//CSS
import "./HomeStyles.css";

//Llamar a los productos


const Home = () => {
  const API = "https://backedsazon.herokuapp.com/products";
  const [data, setData] = useState([]);
  const fetchapi = async () => {
    try{
      const response = await fetch(API);
      const result = await response.json();
      setData(result.filter(product => product.outstanding));
    }catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchapi();
  },[]);
  

  return (
    <div>
      <Carousel/>
      {
        data.length ?
        <>
          <h2>Productos destacados</h2>
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

export default Home;
