import './Product.css';
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.Price * quantity;
    return total.toFixed(2);
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
    </div>
  );
}
export default Product;
