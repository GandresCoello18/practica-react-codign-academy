import { useContext, useState } from 'react';
import { NewProduct } from '../components/NewProduct';
import { useCartStore } from '../store/cart/useCartStore';
import { MainLayout } from '../layout/main.layout';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { BASE_URL, getProductsAxios } from '../api/product.api';
import { CardProduct } from '../components/cardProduct';
import { useEffect } from 'react';
import { MeContext } from '../context/me.provider.context';

export const HomeView = () => {
  const { me } = useContext(MeContext);
  const { addToCart } = useCartStore();
  const [openNewProductModal, setOpenNewProductModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProductsAxios();
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
      <Container className="p-5" justifyContent="flex-end">
        <Row>
          <Col>
            <Button onClick={() => setOpenNewProductModal(true)}>Agregar nuevo Producto</Button>
          </Col>
        </Row>
      </Container>
      <Container className="p-2">
        {loading && <h1>Cargando...</h1>}
        {!loading && !products.length && <h1>No hay productos</h1>}
        <Row xs={1} sm={2} className="g-4">
          {products.map(product => (
            <Col  key={product.id}>
              <CardProduct
                id={product.id}
                image={`${BASE_URL}${product.image}`}
                title={product.title}
                price={product.price}
                rating={product.rating}
                clickAddToCart={() => addToCart(product)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={openNewProductModal} onHide={() => setOpenNewProductModal(false)}>
        <Modal.Header>
          <Modal.Title>Nuevo Producto / {me?.email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewProduct setOpenModal={setOpenNewProductModal} setProducts={setProducts} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenNewProductModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </MainLayout>
  );
};
