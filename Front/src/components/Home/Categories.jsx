import { Col, NavLink, Row } from 'react-bootstrap'
import img from "../../assets/Default.png"

const Categories = () => {
    return (
        <section className='categories'>
            <h2>Titulo</h2>
            <Row>
                <Col>
                    <NavLink to="/">
                        <img src={img} alt="" />
                        <h6>Categoria</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/">
                        <img src={img} alt="" />
                        <h6>Categoria</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/">
                        <img src={img} alt="" />
                        <h6>Categoria</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/">
                        <img src={img} alt="" />
                        <h6>Categoria</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/">
                        <img src={img} alt="" />
                        <h6>Categoria</h6>
                    </NavLink>
                </Col>
            </Row>
        </section>
    )
}

export default Categories