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
  const [values, setValues] = React.useState({});

  

  React.useEffect(()=> {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  }, []);

  React.useEffect(()=> {
    if (cart.length > 0) {
      const last = cart[cart.length - 1].id;
      setValues((prev)=> {
        return {
          ...prev,
          [`item${last}`] : 1
        }
      });
      
    } 
  }, [])

  React.useEffect(() => {
    
    const total = cart.reduce((a, b) => a + (b.price * values[`item${b.id}`]), 0);
    setPrice(total);
  }, [cart]);

  function addToCart(id) {
    let itemId = items.filter(item=> item.id === id);
    setCart(prev => [...prev, itemId[0]]);
    setCount(count + 1);
  }

  function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('hidden');
  }

  function handleChange(e) {
    setValues((prev)=> {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    });
  }


  return (
    <div>
      <Cart items={cart} onClick={toggleCart} total={price} values={values} handleChange={handleChange} />
      <Nav count={count} onClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products handleClick={addToCart} items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
