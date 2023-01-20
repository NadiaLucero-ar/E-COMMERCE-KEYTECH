import '../styles/carouselStyle.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagenesCarrusel from '../data/imagenesCarrusel.js';

const Carrusel = () => {
    return (
        <Carousel className='carrusel'>

            {ImagenesCarrusel.map((ImagenesCarrusel) => {return(
                <Carousel.Item >
                              
                        <img style={{width:"500px",          height:"700px"}}
                          className="d-block w-100"
                          src={ImagenesCarrusel.imagen}
                          alt="First slide"
                        />

                        <Carousel.Caption>
                          <p>{ImagenesCarrusel.descripcion}</p>
                        </Carousel.Caption>

                </Carousel.Item>
                
                
            )})}
        </Carousel>
    )
  }
export default Carrusel;