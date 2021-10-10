import React, {useContext} from 'react'

//Components
import Carousel from '../Components/Carousel';
import CardItem from '../Components/CardItem';
import LoaderPage from "../Components/Loader/LoaderPage";

//CSS
import "./HomeStyles.css";

//Context
import ProductsContext from  '../Context/Products';

const Home = () => {
  //Context con la info de los productos
  const {products} = useContext(ProductsContext);
  
  return (
    <div>
      <Carousel/>
      {
        products.length ?
        <>
          <h2>Productos destacados</h2>
          <div className="card-item-list">
            {
              products.map((product,index) =>
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
