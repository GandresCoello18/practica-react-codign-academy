import { useState } from 'react';
import { MainLayout } from '../layout/main.layout';
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../api/product.api';
import { CardProduct } from '../components/cardProduct';
import { useEffect } from 'react';

export const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <MainLayout>
      <Container className="p-5">
        {loading && <h1>Cargando...</h1>}
        {!loading && !products.length && <h1>No hay productos</h1>}
        <Row>
          {products.map(product => (
            <Col key={product.id}>
              <CardProduct
                image={product.image}
                title={product.title}
                description={product.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};
