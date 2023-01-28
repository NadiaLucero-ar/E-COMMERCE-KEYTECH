import Carrusel from '../components/carrusel';
import Patrocinadores from '../components/Patrocinadores';
import ProductosInicio from '../components/ProductosInicio';
import '../styles/inicio.css';
// import Modal from '../components/Modal';
// import Carrito from '../components/Carrito';

export default function Inicio() {
  return (
    <div className='contenedorInicio'>
        <Carrusel/>
        <ProductosInicio/>
        <Patrocinadores/>
    </div>
  )
}
