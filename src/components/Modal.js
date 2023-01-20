import React,{useState} from 'react';
import '../styles/modal.css';

export default function Modal() {
    const [state, setState]= useState(true);
    function changeState () {
        setState(!state)

    }
    return (
        <>
        {state ?
        <div className='overlay'>
            <h1>verdadero</h1>
            <button type="" onClick={()=>changeState()}>cerrar</button>
        </div>
        : 
        null}
        </>
  )
}
