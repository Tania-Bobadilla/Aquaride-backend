import { Carousel, Row } from "react-bootstrap"
import CardProd from "../CardProd"

const Destacado = () => {
    return (
        <section className="destacados">
            <h2>Titulo</h2>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Row>
                        <CardProd />
                        <CardProd />
                    </Row>
                    

                </Carousel.Item>
                <Carousel.Item>
                    <CardProd />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Destacado