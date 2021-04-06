import React from "react";
import './style.css'
import { Link } from "react-router-dom"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  function logout() {
    localStorage.removeItem("jwtToken");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/logo-wht.png`} width="150" height="50" alt="gainz logo" style={{opacity: "0.7"}}/>
              </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home" style={{color: "#fff"}}>Home
                      <span className="sr-only">(current)</span>
                    </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin" onClick={() => logout()}style={{color: "#fff"}}>Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;