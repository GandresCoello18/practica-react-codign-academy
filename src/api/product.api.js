import axios from 'axios';
export const BASE_URL = process.env.REACT_APP_DOMAIN_SERVER;

// Petición con Fetch, método nativo de JS 
export const getProducts = async () => {
  const dataFetch = await fetch('https://fakestoreapi.com/products');
  const data = await dataFetch.json();
  return data;
};

export const getProductsAxios = async () => {
  return (await axios.get(`${BASE_URL}/api/v1/products`)).data;
}

export const getProductByIdAxios = async ({ id }) => {
  return (await axios.get(`${BASE_URL}/api/v1/products/${id}`)).data;
}

export const newProductAxios = async ({ data }) => {
  const response = await axios.post(`${BASE_URL}/api/v1/products`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
}

export const updateProductByIdAxios = async ({ id, data }) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/products/${id}`, data);
  return response.data;
}

export const deleteProductByIdAxios = async ({ id }) => {
  await axios.delete(`${BASE_URL}/api/v1/products/${id}`);
}
