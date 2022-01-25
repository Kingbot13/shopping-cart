import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';


function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(()=> {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
