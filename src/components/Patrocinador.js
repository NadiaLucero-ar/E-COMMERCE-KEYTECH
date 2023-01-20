import React from 'react';
import '../styles/patrocinadoresStyle.css';

function Patrocinador({ imagen }) {

    return (
        <div className='contenedor-patro'>
             <img    style={{width:"400px",          height:"400px"}}
                    src={imagen} alt='patro' className='imagen-patro' />

        </div>
           
    );
}

export default Patrocinador;