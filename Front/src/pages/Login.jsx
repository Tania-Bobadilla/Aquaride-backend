import { Button, Card, Col, Container, Row } from "react-bootstrap"
import img from "../assets/image-12x.jpg"
import { NavLink } from "react-router-dom"
import FormLogin from "../components/FormLogin"

const Login = () => {
  return (
    <main className="login">
      <Container fluid>
        <Row>
          <Col sm={6} className="login-img">
            <img src={img} alt="" />
          </Col>
          <Col sm={6} className="info">
            <h2>Login</h2>
            <Card>
              <Card.Body>
                <FormLogin />
              </Card.Body>
              <Card.Footer>
                <p>¿No tienes cuenta?</p>
                <NavLink to="/register"><Button variant="outline-secondary">Registrarse</Button></NavLink>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Login