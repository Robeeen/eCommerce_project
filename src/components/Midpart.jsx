import React from 'react'
import { CartState } from '../context/Context'

function Midpart() {
  const { state } = CartState();
  console.log(state);
  return (
    <div>Midpart</div>
  )
}

export default Midpart