"use client"
import React, { useEffect, useState } from 'react'

export default function ProductCard() {
    const [product,SetProduct]= useState([])

     async function fetchproduct(){
       const response = await fetch("https://fakestoreapi.com/products");
       const data = await response.json();
        SetProduct(data)
    }

    useEffect(()=>{
        fetchproduct()
    },[])
  return (
    <>
    <button className='btn btn-success p-3' onClick={fetchproduct}>click</button>
     <div>{product.map((p)=>(
      <div key={p.id}>
       
        {p.title}</div>
    ))}</div>
    </>

  )
  
}
