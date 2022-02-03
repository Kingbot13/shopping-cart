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

  React.useEffect(() => {
    const last = cart[cart.length -1]
    if (cart.length > 0 && cart.length !== Object.keys(values).length) {
      setValues({...values, [`item${last.id}`]: 1});
    }
    const total = cart.reduce((a, b) => a + (b.price * values[`item${b.id}`] || b.price * 1), 0);
    setPrice(total);
  }, [cart, values]);

  function addToCart(id) {
    let itemId = items.filter(item=> item.id === id);
    if (!cart.includes(itemId[0])) {
      setCart(prev => [...prev, itemId[0]]);
      setCount(count + 1);
    }
  }

  function toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.toggle('hidden');
  }

  function handleChange(e) {
    setValues((prev)=> {
      return {
        ...prev,
        [e.target.name]: Number(e.target.value)
      }
    });
  }

  function increment(id) {
    setValues({...values, [`item${id}`]: values[`item${id}`] + 1});
    console.log('add');
    console.log(typeof(values[`item${id}`]));
    console.log(values[`item${id}`]);
  }
  function decrement(id) {
    if (values[`item${id}`] > 1) {
      setValues({...values, [`item${id}`]: values[`item${id}`] - 1});
    }
  }


  return (
    <div>
      <Cart 
      items={cart} 
      onClick={toggleCart} 
      total={price} 
      values={values} 
      handleChange={handleChange} 
      increment={increment}  
      decrement={decrement}  
      />
      <Nav count={count} onClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products handleClick={addToCart} items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
