// WishlistSidebar.jsx
import React, { useState } from 'react';

const WishlistSidebar = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'لیمو', price: 25, quantity: 1 },
    { id: 2, name: 'مارچوبه', price: 5, quantity: 1 },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div id="ms-side-wish" className="ms-side-wish">
      <div className="ms-wish-inner">
        <div className="ms-wish-top">
          <div className="ms-wish-title">
            <span className="wish_title">لیست آرزوهای من</span>
            <a href="javascript:void(0)" className="ms-wish-close">
              <img src="assets/img/icons/close.svg" className="svg_img pro_svg" alt="close" />
            </a>
          </div>
          <ul className="ms-wish-pro-items">
            {wishlistItems.map(item => (
              <li key={item.id}>
                <div className="ms-pro-content">
                  <a href="product-left-sidebar.html" className="wish-pro-title">{item.name}</a>
                  <span className="wish-price">{item.price} تومان x {item.quantity}</span>
                  <button onClick={() => removeItem(item.id)}>×</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WishlistSidebar;