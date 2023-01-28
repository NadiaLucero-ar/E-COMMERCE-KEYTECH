import React from 'react';
import Card from './Card';
// import { productoTarjeta } from '../data/prodTarjetas';
import { shoppingInitialState } from './Reducer/ShoppingReducer';
import '../styles/productosInicio.css';


export default function ProductosInicio() {
  return (
    <div className='contenedor'>
        <h2>Ofertas</h2>
        <section className='contenedorProductosInicio'>
                {shoppingInitialState.products.filter((data) => data.precio <= 9000).map((data) => {return(
                  <section className='contenedorCard'>
                  <Card
                                    key={data.id}
                                    elnombredelproducto={data.nombre}
                                    preciodelproducto={data.precio}
                                    descripciondelproducto={data.descripcion} 
                                    imagendelproducto={data.imagen} 
                                    />      
                                
                  </section>
                                )})
                }
        </section>
    </div>
  )
}
