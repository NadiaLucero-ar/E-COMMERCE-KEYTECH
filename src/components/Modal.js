import React from 'react';
import '../styles/modal.css';
import Carrito from './Carrito';

export default function Modal({stateModal,setStateModal,key}) {
    let state = stateModal;

    return (
        <>
        {state ?
        <div className='overlay'>
            <div className='modalBody'>
            <Carrito key={key}/>
            <button type="" onClick={()=>setStateModal()}>cerrar</button>
            </div>
        </div>
        : 
        null}
        </>
  )
}
