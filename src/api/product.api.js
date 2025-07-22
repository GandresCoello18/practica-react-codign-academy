export const getProducts = async () => {
  const dataFetch = await fetch('https://fakestoreapi.com/products');
  const data = await dataFetch.json();
  return data;
};
