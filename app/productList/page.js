
export const instant = false
import React from 'react'
import ProductServices from '../services/productservices';

export default async function ProductList() {
    const products  =  await ProductServices.getProducts()
    console.log(products);
    

  return (
   <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card p-3">
              <img 
                src={item.image} 
                alt={item.title} 
                className='img-fluid' 
                style={{ maxHeight: '200px', objectFit: 'contain' }} 
              />
              <h5>{item.title}</h5>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

