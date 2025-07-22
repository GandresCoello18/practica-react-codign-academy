import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MeContext } from '../context/me.provider.context';

function LoginView() {
  const { setMe } = useContext(MeContext);
  const navigate = useNavigate(); // HOOKS
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('presionasteis entrar ', form);
    const { email, password } = form;

    if (!email || !password) {
      alert('Debes ingresar email y contraseña');
      return;
    }

    if (!email.includes('@')) {
      alert('Debes ingresar un email valido');
      return;
    }

    if (password.length < 6) {
      alert('Debes ingresar una contraseña con mas de 6 caracteres');
      return;
    }

    alert('Bienvenido');
    setMe({ email, password });
    localStorage.setItem('user-auth', JSON.stringify({ email, password }));
    navigate('/home');
  };

  return (
    <Container justify="center" className="p-5">
      <Row>
        <Col sm={12} lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={event => setForm({ ...form, email: event.target.value })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={event => setForm({ ...form, password: event.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={handleLogin} variant="primary" type="button">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginView;
