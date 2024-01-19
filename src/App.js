import { useState } from "react";
import Header from "./Components/Header";
import ProductsItems from "./Components/ProductsItems";
import Swal from "sweetalert2";
import {Routes , Route} from 'react-router-dom'
import Cart from "./Components/Cart";

 
function App() {
  const [cart, setCart] = useState([]);
  const addtocart = (item) => {
    let ProductsItems = cart.find(product => product.id === item.id)
    if(ProductsItems){
      ProductsItems.quantite += 1;
      setCart([...cart])
      Swal.fire({
        title: "Good job!",
        text: "You added again product!",
        icon: "success"
      }); 
    }else{
      item.quantite = 1;
      setCart([item,...cart])
      Swal.fire({
        title: "Good job!",
        text: "You added the product!",
        icon: "success"
      }); 
    }
  };

  return (
    <div>
      
        <Header cart={cart} />
      <Routes>
        <Route  path="/" element={<ProductsItems addtocart={addtocart} />} />
        <Route path="/Cart" element={<Cart  cart={cart} />  }  />
      </Routes>
    </div>
  );
} 

export default App;
 