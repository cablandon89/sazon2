const API = "https://backedsazon.herokuapp.com/products";

export const fetchApi = async (setData) => {
  try{
    fetch(API)
    .then(response => response.json())
    .then(data => setData(data));
  }catch (error){
    console.log(error);
  }
}

export const fetchApiItem = (setData,id) => {
  try{
    fetch(API +"/"+id)
    .then(response => response.json())
    .then(data => setData(data));
  }catch (error){
    console.log(error);
  }
}

export const formatCop = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


