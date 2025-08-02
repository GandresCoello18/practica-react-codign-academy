import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'sonner';
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
      toast.error('Debes ingresar email y contraseña');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Debes ingresar un email valido');
      return;
    }

    if (password.length < 6) {
      toast.error('Debes ingresar una contraseña con mas de 6 caracteres');
      return;
    }

    toast.info('Bienvenido');
    setMe({ email, password });
    localStorage.setItem('user-auth', JSON.stringify({ email, password }));
    navigate('/home');
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="w-100">
        <Col xs={12} md={8} lg={5} className="mx-auto">
          <Card className="shadow rounded p-4 border-0">
              <Card.Body>
                <Card.Title className="text-center text-primary mb-4">Iniciar sesión</Card.Title>
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

                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_KEY_CAPTCHA}
                      onChange={onChange}
                    />,

                    <Button onClick={handleLogin} className='w-100 py-2' variant="primary" type="button">
                      Entrar
                    </Button>
                  </Form>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginView;
