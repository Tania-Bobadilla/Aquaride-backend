import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/Default.png'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo" style={{ width: "100px" }} />
        <h6>Contacto</h6>
        <p>{<LocationOnIcon />} Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>{<EmailIcon />} email@ejemplo.com</p>
        <p>{<LocalPhoneIcon />} +56 9 1234 5678</p>
      </div>
      <hr />
      <div>
        <Row>
          <Col>
            <h6>Titulo</h6>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </Col>
          <Col>
            <h6>Titulo</h6>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </Col>
          <Col>
            <h6>Titulo</h6>
            <Row>
              <Col><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{<InstagramIcon />}</a></Col>
              <Col><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{<FacebookIcon />}</a></Col>
              <Col><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">{<YouTubeIcon />}</a></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer