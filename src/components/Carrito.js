import {useReducer} from 'react';
import { TYPES } from '../Actions/shoppingAction';
import { shoppingReducer, shoppingInitialState } from './Reducer/ShoppingReducer';
import ProductItem from './ProductItem';
import CartItem from './CartItem';

export default function Carrito() {
    const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);

    function addToCart(id){
        dispatch({type: TYPES.ADD_TO_CART, payload:id})
};

    function delFromCart(id, all = false){
        if(all){
            return dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
        } else {
            return dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
        }
};

    function clearCart(){
        dispatch({type: TYPES.CLEAR_CART})
}
  return (
    <div>
            <h2>Carrito de compras</h2>
            <h3>productos</h3>
            <article style={{display:"flex"}}>
                {shoppingInitialState.products.map((product)=>{return(
                    <ProductItem 
                    key={product.id} 
                    data={product} 
                    addToCart={addToCart}/>
                )})}
            </article>
            <h3>Carrito</h3>
            <article style={{display:"flex"}}>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {shoppingInitialState.cart.map((item,index)=>{return(
                    <CartItem 
                    key={index} 
                    data={item} 
                    delFromCart={delFromCart}
                    />)
                })}
            </article>
        </div>
  )
}
