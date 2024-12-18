import React from 'react'

export default function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fs-2" href="#">START BOOTSTRAP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
              <a className="nav-link" href="#">ABOUT</a>
              <a className="nav-link" href="#">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
  
  )
}
