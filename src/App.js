import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';


function App() {
  const [items, setItems] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [cart, setCart] = React.useState([]);

  React.useEffect(()=> {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  }, []);

  function addToCart() {
    // needs to add item to cart. initialize cart state array to track items added to cart
    // how to send items to cart?
    /*
      possibly set data attributes to card that equal the item id
    */
    setCount(count + 1);
    console.log("clicked");
  }

  return (
    <div>
      <Nav count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products handleClick={addToCart} items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
