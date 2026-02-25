import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../state/globalContext'
import { IconUser, IconShoppingCart } from '@tabler/icons-react';

function Navbar() {
  const user = useContext(GlobalContext).user
  const cart = useContext(GlobalContext).cart

  function getTotalItems() {
    let sum = 0

    for(let i=0; i<cart.length; i++) {
      sum = sum + cart[i].quantity
    }
    
    return sum
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          🛍 My Online Store
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/catalog'} className="nav-link">Catalog</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            <li className="nav-item">
              <NavLink to={'/admin'} className="nav-link">Admin</NavLink>
            </li>

            <div className='text-white ms-5 d-flex gap-2 align-items-center'>
              <div>
                <IconUser stroke={2} /> {user.name}
              </div>

              <NavLink to={'/cart'} className='btn btn-outline-light'>
                <IconShoppingCart stroke={2} /> Cart {getTotalItems()}
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;