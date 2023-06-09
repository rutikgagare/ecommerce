import './App.css';
import React, { useState} from 'react';
import Nav from './Components/Home/Nav';
import ProductSection from './Components/Products/ProductSection';
import Cart from './Components/Carts/Cart';
import CartProvider from './store/CartProvider';
import Features from './Components/Home/Features';
import MainSlider from './Components/Home/MainSlider';
import DailyDeals from './Components/Products/DailyDeals';
import ShopByCategory from './Components/Categories/ShopByCategory';

function App() {
  const [showCart, setShowCart] = useState(false);
  
  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider className="App">
      <Nav showCart={showCartHandler}></Nav>
      <Features></Features>
      <MainSlider></MainSlider>
      <DailyDeals></DailyDeals>
      <ShopByCategory></ShopByCategory>
      <ProductSection></ProductSection>
      {showCart && <Cart onClose={closeCartHandler}></Cart>}
    </CartProvider>
  );
}

export default App;
