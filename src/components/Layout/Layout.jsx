import React from "react";
import Header from "../Header/Header";
import CartSidebar from "../CartSidebar/CartSidebar"
import WishlistSidebar from "../WishlistSidebar/WishlistSidebar"
import SearchPopup from "../SearchPopup/SearchPopup"
import Slider from "../Slider/Slider"
import SocialLinks from "../SocialLinks/SocialLinks"
import NewProduct from "../NewProduct/NewProduct"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <CartSidebar  />
      <WishlistSidebar />
      <SearchPopup />
      <SocialLinks />
      <Slider />
      {children}
      <NewProduct />
    </div>
  );
};

export default Layout;