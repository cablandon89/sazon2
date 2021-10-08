import React, {createContext, useState} from 'react'

const StoreContext = createContext();
 
const Store = ({children}) => {

  const [store, setStore] = useState({
    items:[],
    id:[],
    cantidades:[],
    total:0
  });

  const addItem = () => {
    console.log('additem');
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
