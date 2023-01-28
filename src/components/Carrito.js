import {useReducer} from 'react';
import { TYPES } from '../Actions/shoppingAction';
import { shoppingReducer, shoppingInitialState } from './Reducer/ShoppingReducer';
import ProductItem from './ProductItem';
import CartItem from './CartItem';

export default function Carrito({key}) {
    const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);

    function addToCart(key){
        dispatch({type: TYPES.ADD_TO_CART, payload:key})
};

    function delFromCart(key, all = false){
        if(all){
            return dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:key});
        } else {
            return dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:key});
        }
};

    function clearCart(){
        dispatch({type: TYPES.CLEAR_CART})
}
  return (
    <div>
            <h2>Carrito de compras</h2>
            {/* <h3>productos</h3>
            <article style={{display:"flex"}}>
                {shoppingInitialState.products.map((product)=>{return(
                    <ProductItem 
                    key={product.id} 
                    data={product} 
                    addToCart={addToCart}/>
                )})}
            </article> */}
            <button onClick={()=> addToCart(key)}>Agregar al carrito</button>
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
