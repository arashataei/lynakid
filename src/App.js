// App.jsx
import React from 'react';
import Header from '../src/components/Header/Header';
import HomeSection from '../src/components/HomeSection/HomeSection';
import SearchPopup from '../src/components/SearchPopup/SearchPopup';
import CartSidebar from '../src/components/CartSidebar/CartSidebar';
import WishlistSidebar from '../src/components/WishlistSidebar/WishlistSidebar';
import SocialLinks from '../src/components/SocialLinks/SocialLinks';
import Slider from './components/Slider/Slider';
import NewProduct from './components/NewProduct/NewProduct';

const App = () => {
  return (
    <div>
      <Header />
      <CartSidebar />
      <WishlistSidebar />
      <SearchPopup />
      <SocialLinks />
      <Slider />
      <HomeSection />
      <NewProduct />
    </div>
  );
};

export default App;