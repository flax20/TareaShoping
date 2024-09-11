import { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';
import Products from './Products';
import { useEffect } from 'react';


export default function Cart() {
  const { cart, clearCart, removeFromCart, addToCart, count } = useContext(CartContext);

  return (
    <>
      <label className='cart-button' htmlFor='cart' > {count} 🛒 </label>
      <input id='cart' type='checkbox' hidden />
      

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Quantity: {product.quantity}</small>
                <button>-</button>
                <button onClick={()=>addToCart(product)}>+ </button>
                <button onClick={()=>removeFromCart(product)}>Delete</button>
                

              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>Clear cart</button>
        
        

      </aside>
    </>
  );
}
