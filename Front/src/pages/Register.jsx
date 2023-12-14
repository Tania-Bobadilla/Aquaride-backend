import { Button, Card, Col, Container, Row } from "react-bootstrap"
import img from "../assets/image-12x.jpg"
import FormRegister from "../components/FormRegister.jsx"
import { NavLink } from "react-router-dom"

const Register = () => {
  return (
    <main className="register">
      <Container fluid>
        <Row>
          <Col sm={6} className="register-img">
            <img src={img} alt="" />
          </Col>
          <Col sm={6} className="info">
            <h2>Registro</h2>
            <Card>
              <Card.Body>
                <FormRegister />
              </Card.Body>
              <Card.Footer>
                <p>¿Ya tienes cuenta? Ingresa aquí.</p>
                <NavLink to="/login"><Button variant="outline-secondary">Login</Button></NavLink>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Register