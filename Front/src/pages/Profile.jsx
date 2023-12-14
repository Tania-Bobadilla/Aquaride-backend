import { Button, Col, Container, Row } from "react-bootstrap"
import img from "../assets/image-12x.jpg"

const Profile = () => {
  return (
    <main className="profile">
      <Container>
        <h2>Nombre</h2>
        <Row>
          <Col sm={3}>
            <img src={img} alt="" />
          </Col>
          <Col sm={9} className="info">
            <h4>Datos</h4>
            <form>
              <Row>
                <Col className='mb-3'>
                  <label htmlFor="name">
                    <strong>Nombre</strong>
                  </label>
                  <input
                    type="text"
                    placeholder='Nombre'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-1'
                    disabled={true}
                  // onChange={}
                  />
                </Col>
                <Col className='mb-3'>
                  <label htmlFor="lastname">
                    <strong>Apellido</strong>
                  </label>
                  <input
                    type="text"
                    placeholder='Apellido'
                    autoComplete='off'
                    name='lastname'
                    className='form-control rounded-1'
                    disabled={true}
                  // onChange={}
                  />
                </Col>
              </Row>
              <Col className='mb-3'>
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder='Email'
                  autoComplete='off'
                  name='email'
                  className='form-control rounded-1'
                  disabled={true}
                // onChange={}
                />
              </Col>
            </form>
            <Button className="btn-edit">Editar datos</Button>
            <Button className="btn-save">Guardar cambios</Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Profile