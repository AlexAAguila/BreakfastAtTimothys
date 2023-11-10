import { useState } from 'react'
import './App.css'

function App() {

const [cart,setCart] = useState([]);
 
const breakfast ={
title:"Shopping Cart",
cart:[],
 products: ["French Vanilla", "Black Coffee", "Pumpkin Spice Latte", "Sausy Farmer Wrap", "Wild Blueberry Muffin", "Chicken Noodle Soup", "Honey Cruller", "Boston Cream", "Apple Fritter", "Honey Dip", "Everything Bagel", "Bacon Breakfast Sandwich", "Green Tea", "Double Double"]
}

const addToCart = (e)=>{
  e.preventDefault();
const productName = e.target.elements.products.value;
const existingProduct = cart.find(item => item.name === productName)

if (existingProduct) {
  setCart(cart.map(item =>
    item.name === productName? {...item, quantity:item.quantity +1} :item
   
  ))
}else {
  setCart([...cart, {name: productName,quantity :1}]);
}

};


  return (
    <>
    <img src="./src/assets/bfast-timmays.png" alt="" width="400" />
 <h1>{breakfast.title}</h1>
<form onSubmit={addToCart}>
<label htmlFor="products">Products:</label>

<select name="products" id="products">
  {breakfast.products.map((product,index) =>
  <option key={index} value={product}>{product}</option>
)}</select>
<button type='submit'>Add to Cart</button>
</form>

{cart.length > 0 && (
  <div className='cart-items'>
    <ul>
      {cart.map((item,index) =>(
        <li key={index}>{item.name}{item.quantity > 1 && ` x ${item.quantity}`}</li>

      ))}
    </ul>
  </div>
)}
<p>{cart.length === 0? 'Add Some Items' : `You have ${cart.reduce((total,item)=> total + item.quantity,0)} item(s) in your cart`}</p>

    </>
)
}


export default App;
