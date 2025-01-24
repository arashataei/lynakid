// CartSidebar.jsx
import React, { useState } from 'react';

const CartSidebar = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'لیچی تازه', price: 25, quantity: 1 },
    { id: 2, name: 'زنجبیل - ارگانیک', price: 5, quantity: 1 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div id="ms-side-cart" className="ms-side-cart">
      <div className="ms-cart-inner">
        <div className="ms-cart-top">
          <div className="ms-cart-title">
            <span className="cart_title">سبد خرید من</span>
            <a href="javascript:void(0)" className="ms-cart-close">
              <img src="assets/img/icons/close.svg" className="svg_img pro_svg" alt="close" />
            </a>
          </div>
          <ul className="ms-cart-pro-items">
            {cartItems.map(item => (
              <li key={item.id}>
                <div className="ms-pro-content">
                  <a href="product-left-sidebar.html" className="cart-pro-title">{item.name}</a>
                  <span className="cart-price">{item.price} تومان x {item.quantity}</span>
                  <button onClick={() => removeItem(item.id)}>×</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ms-cart-bottom">
          <div className="cart-sub-total">
            {/* Subtotal and VAT */}
          </div>
          <div className="cart_btn">
            <a href="cart.html" className="ms-btn-1">مشاهده سبد خرید</a>
            <a href="checkout.html" className="ms-btn-2">تسویه حساب</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;