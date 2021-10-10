import React,{useContext} from 'react'
//Components
import CardItem from '../Components/CardItem';
import LoaderPage from '../Components/Loader/LoaderPage';

//Context
import ProductsContext from  '../Context/Products';

const Carta = () => {
  //Context con la info de los productos
  const {products} = useContext(ProductsContext);

  
  return (
    <div>
      {
        products.length ?
        <>
          <h2>Todos nuestros productos</h2>
          <div className="card-item-list">
            {
              products.map((product,index) =>
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
