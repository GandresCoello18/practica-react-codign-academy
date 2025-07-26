import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CardProduct = ({
  id,
  image,
  title,
  price,
  rating,
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
        <Card.Text>
          ${price}
          <span style={{ float: 'right' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            {rating}
          </span>
        </Card.Text>
        {clickAddToCart && <Button variant="primary" onClick={clickAddToCart}>Agregar al carrito</Button>}
        {clickRemoveToCart && <Button variant="danger" onClick={clickRemoveToCart}>Eliminar del carrito</Button>}
        <Link to={`/product/${id}`} className='btn btn-outline-primary mt-3' variant="primary" onClick={clickRemoveToCart}>Ver</Link>
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  clickAddToCart: PropTypes.func
}

CardProduct.defaultProps = {
  image: 'https://placehold.co/600x400',
  title: 'Titulo improvisado',
  price: '0',
}
