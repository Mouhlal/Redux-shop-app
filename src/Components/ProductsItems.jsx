import React from "react";
import "../Components/ProductsItems.css";

export default function ProductsItems({ addtocart }) {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      category: "men's clothing",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      category: "men's clothing",
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      category: "men's clothing",
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title: "Silver Dragon Station Chain Bracelet",
      price: 695,
      category: "jewelery",
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      category: "jewelery",
      img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      category: "jewelery",
      img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      category: "jewelery",
      img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
  ];
  return (
    <div className="all">
      {products.map((pro, index) => (
        <div className="all-card" key={index}>
          <img src={pro.img} className="image-card" />
          <div className="card-body">
            <br />
            <h5 className="card-title"> {pro.title} </h5> <br />
            <p className="card-price"> {pro.price} $ </p>
            <button
              onClick={() => addtocart(pro)}
              className="btn btn-danger"
              id="lala"
            >
              <i className="bi bi-cart-plus-fill"></i>
              <span className="name-btn"> Add to Cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
