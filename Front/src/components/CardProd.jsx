import { Card } from 'react-bootstrap'
import img from "../assets/image-12x.jpg"
import { NavLink } from 'react-router-dom'

const CardProd = () => {
    return (
        <div className='card-prod'>
            <NavLink to="/">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>$ 000.000</Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    )
}

export default CardProd