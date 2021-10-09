const API = "https://backedsazon.herokuapp.com/products";

export const fetchApi = async (setData) => {
  try{
    const response = await fetch(API);
    const result = await response.json();
    setData(result);
  }catch (error){
    console.log(error);
  }
}

export const fetchApiItem = async (setData,id) => {
  try{
    const response = await fetch(API +"/"+id);
    const result = await response.json();
    setData(result);
  }catch (error){
    console.log(error);
  }
}

export const formatCop = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


