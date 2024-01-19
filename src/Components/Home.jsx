import React from 'react'
import ProductsItems from './ProductsItems'

export default function Home() {
  return (
    <div>
        <ProductsItems addtocart={addtocart} />
    </div>
  )
}
