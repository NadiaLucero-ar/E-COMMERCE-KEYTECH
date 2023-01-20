import React from 'react';
import  {imagenesPatrocinadores}  from '../data/arrayPatrocinadores';
import Patrocinador from './Patrocinador';
import '../styles/patrocinadoresStyle.css'

const Patrocinadores = () => {
    return (
        <div className='contenedor-patrocinadores'>
            {imagenesPatrocinadores.map((imagen) => {
                return(
                    <Patrocinador key={imagenesPatrocinadores[imagen]}
                                 imagen={imagen}/>
                )
            })}
        </div>
    );
}

export default Patrocinadores;
