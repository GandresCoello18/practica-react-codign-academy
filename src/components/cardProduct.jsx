import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const CardProduct = ({
  image,
  title,
  description,
  clickAddToCart,
  clickRemoveToCart
}) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <div className='overflow-hidden' style={{ height: 200 }}>
        <Card.Img variant="top" src={image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>

      <Card.Body className='d-flex flex-column'>
        <Card.Title className='text-truncate' title={title}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {clickAddToCart && <Button variant="primary" onClick={clickAddToCart}>Agregar al carrito</Button>}
        {clickRemoveToCart && <Button variant="danger" onClick={clickRemoveToCart}>Eliminar del carrito</Button>}
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clickAddToCart: PropTypes.func
}

CardProduct.defaultProps = {
  image: 'https://placehold.co/600x400',
  title: 'Titulo improvisado',
  description: '* NO HAY DESCRIPCIÓN *',
}
