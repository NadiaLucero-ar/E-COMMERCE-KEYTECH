
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carouselStyle.css';
import imagen from '../imagenes/oferta8.jpg';

function  Carrusel() {
  return (
    <Carousel className='carousel'>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src= {imagen}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src="./public/imagenes/Armado-De-PC-Gamer.png"
            alt="Second slide"
          />

        <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src="./public/imagnes/computadoras a tu medida.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel;