import { Card, Button } from 'react-bootstrap';

export const CardProduct = ({
  image = 'https://placehold.co/600x400',
  title = 'Titulo improvisado',
  description,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description || '* NO HAY DESCRIPCIÓN *'}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};
