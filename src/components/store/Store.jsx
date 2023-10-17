import React from 'react';
import printifyProductsData from './printify_products.json'; // Import your JSON data

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <div className="product-list">
        {printifyProductsData.map((product, index) => (
          <div className="product" key={index}>
            <a href={product.link}>
              <img src={product.image_url} alt={product.description} />
              <p>{product.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;




