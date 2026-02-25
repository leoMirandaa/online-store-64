import './Product.css';
import QuantityPicker from './QuantityPicker';
import { useState, useContext } from 'react';
import GlobalContext from '../state/globalContext'

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(GlobalContext).addProductToCart

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.Price * quantity;
    return total.toFixed(2);
  }

  function onAdd() {
    console.log("Clicking onAdd Function");
    let fixedProduct = {...props.data}
    fixedProduct.quantity = quantity
    globalAdd(fixedProduct)
  }

  return (
    <div className="product"> 
      <img src="https://picsum.photos/220/180" alt="Product" /> 
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>Total: ${getTotal()}</label>
        <label>Price: ${props.data.Price.toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={handleQuantityChange} />

      <button className='btn btn-dark w-100 mt-2' onClick={onAdd}>Add</button>
    </div>
  );
}
export default Product;
