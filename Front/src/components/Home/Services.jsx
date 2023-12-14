import { Col, Row } from "react-bootstrap"
import img from "../../assets/image-12x.jpg"

const Services = () => {
    return (
        <section className="services">
            <Row>
                <Col><img src={img} alt="" /></Col>
                <Col>
                    <h5>Titulo</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </Col>
                <Col><img src={img} alt="" /></Col>
                <Col>
                    <h5>Titulo</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </Col>
            </Row>
        </section>
    )
}

export default Services