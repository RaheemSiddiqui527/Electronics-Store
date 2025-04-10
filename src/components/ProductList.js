import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', brand: '', minPrice: '', maxPrice: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products/filter', { params: filters });
      setProducts(res.data);
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="filter-container">
        <input name="category" placeholder="Category" onChange={handleFilterChange} />
        <input name="brand" placeholder="Brand" onChange={handleFilterChange} />
        <input name="minPrice" type="number" placeholder="Min Price" onChange={handleFilterChange} />
        <input name="maxPrice" type="number" placeholder="Max Price" onChange={handleFilterChange} />
      </div>
      <div>
        {products.map(product => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Specs: {product.specs && Object.entries(product.specs).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
            <RelatedProducts productId={product._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;