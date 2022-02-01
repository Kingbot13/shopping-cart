import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';


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

  React.useEffect(() => {
    console.log("cart" , cart);
    
  },[cart])

  function addToCart(id) {
    let itemId = items.filter(item=> item.id === id);
    setCart(prev => [...prev, itemId[0]]);
    setCount(count + 1);
    console.log('item', itemId);
    console.log("clicked");
  }

  function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('hidden');
    console.log('clicked');
  }

  return (
    <div>
      <Cart items={cart} onClick={toggleCart} />
      <Nav count={count} onClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products handleClick={addToCart} items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
