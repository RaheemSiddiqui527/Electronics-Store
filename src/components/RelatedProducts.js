import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RelatedProducts = ({ productId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${productId}/related`)
      .then(res => setRelated(res.data))
      .catch(err => console.log(err));
  }, [productId]);

  return (
    <div>
      <h4>Related Products</h4>
      {related.map(product => (
        <div key={product._id}>
          <p>{product.name} - ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;