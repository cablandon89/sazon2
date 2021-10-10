import React, {createContext, useState, useEffect} from 'react'

const ProductsContext = createContext();
 
const Products = ({children}) => {
  const API = "https://backedsazon.herokuapp.com/products";
  const [products, setProducts] = useState([]);
  
  
  const fetchApi = () => {
    try{
      fetch(API)
      .then(response => response.json())
      .then(data => setProducts(data));
    }catch (error){
      console.log(error);
    }
  }

  const detailProduct = (id) => {
    return products.filter(product => (product.id === id));
  }

  useEffect(() => {
    fetchApi();
  },[]);
  
  const data= {products, fetchApi, detailProduct};
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}
export {Products}
export default ProductsContext;