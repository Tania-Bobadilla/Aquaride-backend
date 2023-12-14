import { Button, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main className="error-page">
      <Container>
        <h1>404</h1>
        <h3>Página No Encontrada</h3>
        <hr />
        <h4>No se pudo encontrar la página solicitada.</h4>
        <NavLink to="/">
          <Button variant="outline-primary">Volver al inicio</Button>
        </NavLink>
      </Container> 
    </main>
  )
}

export default ErrorPage