import { Button, Col, Row } from "react-bootstrap"
import img from "../../assets/image-12x.jpg"

const About = () => {
  return (
    <section className="about">
        <Row>
            <Col>
                <img src={img} alt=""/>
            </Col>
            <Col className="info">
                <h2>Titulo</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quibusdam doloribus nulla earum, dicta perspiciatis animi aspernatur vitae possimus modi, quo, in tempora natus reprehenderit sint? Necessitatibus minus magnam explicabo?</p>
                <Button variant="outline-primary">Boton</Button>
            </Col>
        </Row>
    </section>
  )
}

export default About