import React from "react";
import '../components/Navbar.css';



export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbarcss" data-bs-theme="dark">
        <div className="container-fluid">
          <img src="/images/logo/trijo-logo.png" className="logoimg" alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Plan Trip</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blogs</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="bi bi-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Log in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Sign up</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
