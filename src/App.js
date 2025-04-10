import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Electronics Store</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;