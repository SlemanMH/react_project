import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='header position-sticky top-0 left-0'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fs-2" to={'/'}>START BOOTSTRAP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to={'/Portfolio'}>PORTFOLIO</Link>
              <Link className="nav-link" to={'/About'}>ABOUT</Link>
              <Link className="nav-link" to={'/Contact'}>CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
