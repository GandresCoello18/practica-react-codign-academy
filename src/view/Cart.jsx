import { MainLayout } from '../layout/main.layout';
import { CardProduct } from '../components/cardProduct';
import { useCartStore } from '../store/cart/useCartStore';
import { Container, Row, Col  } from 'react-bootstrap';

export const CartPage = () => {
    const { cart, removeToCart, clearCart } = useCartStore();

    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col>
                        <h1>Carrito</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {cart.map(product => (
                    <Col  key={product.id}>
                        <CardProduct
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            clickRemoveToCart={() => removeToCart(product.id)}
                        />
                    </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12}>
                        {cart.length ? (
                            <button className='btn btn-danger w-100' onClick={clearCart}>Limpiar carrito</button>
                        ) : (
                            <h2>No hay productos en el carrito</h2>
                        )}
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}