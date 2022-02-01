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
  const [price, setPrice] = React.useState(0);

  

  React.useEffect(()=> {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  }, []);

  React.useEffect(() => {
    const total = cart.reduce((a, b) => a + b.price, 0);
    console.log("total" , total);
    setPrice(total);

    
  },[cart])

  function addToCart(id) {
    let itemId = items.filter(item=> item.id === id);
    setCart(prev => [...prev, itemId[0]]);
    setCount(count + 1);
    console.log('item', itemId);
  }

  function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('hidden');
  }


  return (
    <div>
      <Cart items={cart} onClick={toggleCart} total={price} />
      <Nav count={count} onClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products handleClick={addToCart} items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
