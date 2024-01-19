import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({cart}) {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Akram Shoop</Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{textDecoration:"none"}} to="/Cart"><a className="nav-link active"><i className="bi bi-cart-plus-fill">({cart.length})</i></a></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
