import React from 'react';
import nosotrosimg from  '../imagenes/nosotros-pc-gamer.jpg';
import '../styles/nosotros.css';
import logo from  '../imagenes/KeyTechTrademark.jpg';

export default function Nosotros() {
  return (
    <div style={{backgroundImage:`url(${nosotrosimg})`,                 backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:"100vh"}}
    className='nosotros'>
        <h1>KeyTech</h1>
        <div className='nosotros-title'>
             <p className='nosotros-text'>Nos dedicamos a la venta y distribución de insumos tecnológicos. Con nuestra tienda virtual acercamos los productos que necesitan nuestros clientes a todos los puntos del país. Semanalmente actualizamos las ofertas especiales más competitivas del mercado.</p>
             <img src={logo} alt="Logo de la empresa"/>
         </div>
    </div>
  )
}
