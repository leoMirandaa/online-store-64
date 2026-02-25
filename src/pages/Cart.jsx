import { useContext } from 'react'
import GlobalContext from '../state/globalContext'

function Cart() {
  const cart = useContext(GlobalContext).cart
  const onDelete = useContext(GlobalContext).removeProductFromCart

  function getTotalItems() {
    let sum = 0

    for(let i=0; i<cart.length; i++) {
      sum = sum + cart[i].quantity
    }
    
    return sum
  }

  function getTotalPrice() {
    let total = 0

    for(let i=0; i<cart.length; i++){
      total += (cart[i].Price * cart[i].quantity)
    }

    return total.toFixed(2)
  }

  return (
    <div className='bg-light'>
      <h1>Ready to complete the purchase?</h1>

      <div className='mx-4'>
        <ul>
          { 
            cart.map(product =>  
              <li className='bg-white border mb-2 d-flex justify-content-between align-items-center pe-4'>
                <img width={200} src={'images/' + product.image} alt="" />
                <h6 className='fw-bold fs-5'>{product.title}</h6>
                <span>QTY: # {product.quantity}</span>
                <span>Price: ${product.Price}</span>
                <span>$ {(product.quantity * product.Price)}</span>
                <button onClick={() => onDelete(product._id)} className='btn btn-danger'>Remove</button>
              </li>
            )}
        </ul>

        <h3>We have <strong>{getTotalItems()}</strong> Products in the cart</h3>
        <h4>Total: <strong>{getTotalPrice()}</strong></h4>
      </div>
    </div>
  )
}

export default Cart;