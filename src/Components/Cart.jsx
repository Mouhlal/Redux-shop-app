import React from 'react'

export default function Cart({cart}) {
  return (
    <div className='pt-3 m-2'>
        <div className="cart">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">Quantité</th>
      <th scope="col">Total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {
    cart.map((item,index)=>(
        <tr key={index}>
            <td> {item.id} </td>
            <td>
                <img src={item.img} alt={item.title} width={60} height={60} />
            </td>
            <td> {item.title} </td>
            <td> {item.price}$ </td>
            <td>
                <i className="bi bi-caret-up"></i>
                <span> {item.quantite} </span>
                <i className="bi bi-caret-down"></i>
            </td>
            <td>
                  {item.price * item.quantite}$
            </td>
        </tr>
    ))
   }
   <tr>
       <th className='text-center' colSpan={3}>
        Total
       </th>
       <td colSpan={2}>
        <span className='badge bg-danger rounded-pill'>
            ${
                cart.reduce((tot,item)=>
                    tot += item.price * item.quantite , 0 
                )
            }
        </span>
       </td>
   </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
