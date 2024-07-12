import React from 'react'
import { CartState } from '../context/Context'

function Midpart() {
  const { state : {product} } = CartState();
  console.log(product);
  return (
    <div>Midpart
      {product.map((prod, index) => {
       return <li key={index}>{prod.name}</li>
      })}


    </div>
  )
}

export default Midpart