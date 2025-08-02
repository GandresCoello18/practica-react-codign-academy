import { MainLayout } from '../layout/main.layout';
import { BASE_URL, getProductByIdAxios, deleteProductByIdAxios } from '../api/product.api';
import { CardProduct } from '../components/cardProduct';
import { useNavigate } from 'react-router-dom';
import { UpdateProduct } from '../components/UpdateProduct';
import { toast } from 'sonner';
import { Button, Col, Container, Row, Modal } from 'react-bootstrap';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

/*
    const double = useMemo(() => {
        console.log('Calculando...');
        return count * 2;
    }, [count]);
*/

const ProductIdPage = () => {
    const navigate = useNavigate();
    const productId = useParams().id;
    const [loading, setLoading] = useState(false);
    const [loadingRemove, setLoadingRemove] = useState(false);
    const [openUpdateProductModal, setOpenUpdateProductModal] = useState(false);
    const [product, setProduct] = useState(null);

    const fetchProductById = useCallback(async () => {
        setLoading(true);
        try {
            const product = await getProductByIdAxios({ id: productId });
            setProduct(product);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductById();
    }, [fetchProductById]);

    const handleDeleteProduct = async () => {
        if (loading) return;
        setLoadingRemove(true);

        try {
            await deleteProductByIdAxios({ id: productId });
            toast.success('Producto eliminado');
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadingRemove(false);
        }
    }

    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col><h1>Producto: {product?.title}</h1></Col>
                    <Col>
                        <Button variant='primary' onClick={() => setOpenUpdateProductModal(true)}>Actualizar Producto</Button>
                    </Col>
                </Row>
            </Container>

            <Container className="p-5">
                <Row>
                    <Col>
                        {loading ? (
                            <div className='bg-info p-5'>
                                <h1>Cargando...</h1>
                            </div>
                        ) : product ? (
                            <CardProduct
                                id={product.id}
                                image={`${BASE_URL}${product.image}`}
                                title={product.title}
                                price={product.price}
                                loading={loading || loadingRemove}
                                rating={product.rating}
                                clickAddToCart={() => console.log(product)}
                                clickRemoveProduct={handleDeleteProduct}
                            />
                        ) : (
                            <div className='bg-info p-5'>
                                <h1>Producto no encontrado</h1>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            <Modal show={openUpdateProductModal} onHide={() => setOpenUpdateProductModal(false)}>
                <Modal.Header>
                    <Modal.Title>Actualizar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateProduct product={product} setOpenModal={setOpenUpdateProductModal} setProduct={setProduct} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenUpdateProductModal(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </MainLayout>
    )
}

export default ProductIdPage;
