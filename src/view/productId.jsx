import { MainLayout } from '../layout/main.layout';
import { BASE_URL, getProductByIdAxios } from '../api/product.api';
import { CardProduct } from '../components/cardProduct';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

/*
    const double = useMemo(() => {
        console.log('Calculando...');
        return count * 2;
    }, [count]);
*/

const ProductIdPage = () => {
    const productId = useParams().id;
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);

    const fetchProductById = useCallback(async () => {
        setLoading(true);
        try {
            const product = await getProductByIdAxios({ id: productId });
            setProduct(product);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductById();
    }, [fetchProductById]);

    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col><h1>Producto **</h1></Col>
                </Row>
            </Container>
            <Container className="p-5">
                <Row>
                    <Col>
                        {loading ? (
                            <div className='bg-info p-5'>
                                <h1>Cargando...</h1>
                            </div>
                        ) : product ? <CardProduct
                            id={product.id}
                            image={`${BASE_URL}${product.image}`}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            clickAddToCart={() => console.log(product)}
                        /> : (
                            <div className='bg-info p-5'>
                                <h1>Producto no encontrado</h1>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default ProductIdPage;
