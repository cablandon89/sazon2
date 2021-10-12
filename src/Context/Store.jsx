import React, {createContext, useState, useEffect} from 'react'

const StoreContext = createContext();
 
const Store = ({children}) => {

  const [store, setStore] = useState([]);
  
 /* eslint eqeqeq: 0 */
  const addItem = (product) => {
    if(!store.some(item => item.id === product.id)){
      setStore([...store, { id: product.id, name: product.name, quantity: product.quantity, total: product.total, amount: product.amount, stock: product.stock}]);
    }else{
      const index = store.findIndex(item => item.id == product.id);
      let nstore = [...store];
      let quantity = store[index].quantity + product.quantity;
      let total = store[index].total + product.total;
      nstore[index].quantity = quantity;
      nstore[index].total = total;
      setStore(nstore);  
    }
  }

  const updateItem = (product, index) => {
    let nstore = [...store];
    nstore[index] = product;
    nstore[index].total = product.amount*product.quantity;
    setStore(nstore);
  }

  const removeItem = (index) => {
    let nstore = [...store];
    nstore.splice(index,1);
    setStore(nstore);
  }

  const emptyCart = () => {
    setStore([]);
  }

  
  useEffect(() =>{
    if(JSON.parse(localStorage.getItem('carrito'))){
      setStore(JSON.parse(localStorage.getItem('carrito')))
    }else{
      setStore(localStorage.setItem("carrito",JSON.stringify([])))
    }
  },[]);
  
  useEffect(() =>{
    localStorage.setItem("carrito",JSON.stringify(store));
  },[store])
  
  
  
  const data= {store, addItem, updateItem, removeItem, emptyCart};
  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  )
}
export {Store}
export default StoreContext;
