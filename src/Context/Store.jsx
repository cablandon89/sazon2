import React, {createContext, useState} from 'react'

const StoreContext = createContext();
 
const Store = ({children}) => {

  const [store, setStore] = useState([]);
  
  /* 
    items:[],
    id:[],
    cantidades:[],
    total:0
  */
  const addItem = (product) => {
    if(!store.some(item => item.id === product.id)){
      setStore([...store, { id: product.id, name: product.name, quantity: product.quantity, total: product.total}]);
    }else{
      store.map((item,index) => {
       if(item.id === product.id){
         let quantity = item.quantity + product.quantity;
         let total = item.total + product.total;
         let nstore = [... store];
         nstore[index].quantity = quantity;
         nstore[index].total = total;
         setStore(nstore);  
       }
      })
    }
  }
  
  const data= {store, addItem};
  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  )
}
export {Store}
export default StoreContext;
