import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MeContext } from '../context/me.provider.context';

export function NavBar() {
  const { me, setMe } = useContext(MeContext);

  const handleCloseSession = () => {
    localStorage.removeItem('user-auth')
    setMe(null);
  }

  return (
    <Navbar expand="lg" bg="light" className="shadow py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">ICON</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {me && (
            <Nav className="align-items-center">
              <Nav.Item className="me-3 text-muted small">
                {me.email}
              </Nav.Item>
              <Button size="sm" variant="danger" onClick={handleCloseSession}>
                Cerrar Session
              </Button>
            </Nav>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
