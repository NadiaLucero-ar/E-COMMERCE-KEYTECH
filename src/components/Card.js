import React, {useState} from 'react';
import Modal from '../components/Modal';



export default function Card({elnombredelproducto, preciodelproducto,descripciondelproducto,imagendelproducto, key}) {

const [state, setState]=useState(false);
function changeState () {
    setState(false);
    return  setState(!state)
}

  return (
    <div class="card border-light bg-dark " style={{width:"300px",color:"#aaa"}}>
      <div class="card-header">{elnombredelproducto}</div>
      <div class="card-body">
        <img src={imagendelproducto} alt={descripciondelproducto}/>
        <h5 class="card-title">{preciodelproducto}</h5>
        <p class="card-text">{descripciondelproducto}.</p> 
        <button type="button" class="btn btn-secondary btn-lg btn-block"onClick={()=> changeState()}>Comprar</button>
        <Modal key={key}
               stateModal={state}
               setStateModal={changeState}></Modal>


      </div>
    </div>
  )
  }

