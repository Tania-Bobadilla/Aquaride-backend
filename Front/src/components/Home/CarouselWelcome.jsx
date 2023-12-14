import { Carousel } from 'react-bootstrap'
import img from "../../assets/image-12x.jpg"

const CarouselWelcome = () => {
    return (
        <section className='welcome'>
            <Carousel>
                <Carousel.Item>
                    <img src={img} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Slide 1</h1>
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Slide 2</h1>
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Slide 3</h1>
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default CarouselWelcome