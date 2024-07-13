import React from 'react'
import { CartState } from '../context/Context'

function Midpart() {
  const { state : {product} } = CartState();
  console.log(product);
  return (
    <div className='container'>
      {product.map((prod, index) => {
       return <li key={index}>{prod.name}</li>
       })}
    </div>
  )
}

export default Midpart