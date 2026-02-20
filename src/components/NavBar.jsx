import { NavLink } from 'react-router-dom'

function Navbar() {
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;