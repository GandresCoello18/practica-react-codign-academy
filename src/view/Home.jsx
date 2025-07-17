import { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../api/product.api'
import { CardProduct } from '../components/cardProduct';
import { NavBar } from '../components/navBar';
import { Footer } from '../components/footer';
import { useEffect } from 'react';

export const HomeView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts();
                setProducts(products)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct();
    }, []);

  return (
    <Fragment>
      <NavBar />
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
      <Footer />
    </Fragment>
  );
};
