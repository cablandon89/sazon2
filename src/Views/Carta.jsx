import React,{useState, useEffect} from 'react'
//Components
import CardItem from '../Components/CardItem';
import LoaderPage from '../Components/Loader/LoaderPage';
//utiles
import { fetchApi } from '../Utiles/utiles';

const Carta = () => {
  //State local para traer lo de la api
  const [data, setData] = useState([]);

  //UseEffect para la api
  useEffect(() => {
    fetchApi(setData);
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
