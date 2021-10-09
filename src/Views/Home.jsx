import React, {useState, useEffect} from 'react'

//Components
import Carousel from '../Components/Carousel';
import CardItem from '../Components/CardItem';
import LoaderPage from "../Components/Loader/LoaderPage";

//utiles
import { fetchApi } from '../Utiles/utiles';

//CSS
import "./HomeStyles.css";


const Home = () => {
  //State local para traer lo de la api
  const [data, setData] = useState([]);

  //UseEffect para la api
  useEffect(() => {
    fetchApi(setData);
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
                product.outstanding &&
                  <CardItem key={index} id={product.id} name={product.name} amount={product.amount} stock={product.stock} />
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
