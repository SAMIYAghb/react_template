import React from "react";
import { Link } from "react-router-dom";
import style from './Header.module.css'

export default function Header() {


  return (
    <>
    <div className={style.header}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">

  <           img className={style.img} src="./images/logo.png" alt="" />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse "  id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pricing">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="login">
                <button><i class="fa-solid fa-right-to-bracket"></i>Sign In</button>
              </div> */}
        </nav>
      </div>  
    </div>  
    </>
  );
};


