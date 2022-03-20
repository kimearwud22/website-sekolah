/* eslint-disable no-unused-vars */
import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import $ from "jquery";
import Popper from "popper.js";

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div>
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center text-white">
              <a
                href="contact-us"
                className="d-none d-md-block d-lg-block mx-1"
              >
                Yayasan Pondok Pesantren Islam Salafiyah Ainul Huda
              </a>
            </div>
          </div>
        </div>
        <header>
          <div id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
              <h1 className="logo me-auto">
                <img src="img/logo1.png" alt="" srcset="" />
                <a href=".">YPPIS Ainul Huda</a>
              </h1>
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li>
                    <div className="dropdown" onClick={this.toggleOpen}>
                      <button
                        className="btn btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                      >
                        BERANDA
                      </button>
                      <div
                        className={menuClass}
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href=".">
                        <Link to="/"> Home </Link>
                        </a>
                        <a className="dropdown-item" href=".">
                          <Link to="/about"> Tentang Kami </Link>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/gallery">GALLERY</Link>
                  </li>
                  <li>
                    <div className="dropdown" onClick={this.toggleOpen}>
                      <button
                        className="btn btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                      >
                        LEMBAGA PENDIDIKAN
                      </button>
                      <div
                        className={menuClass}
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href=".">
                          PDF Ainul Huda (Diniah)
                        </a>
                        <a className="dropdown-item" href=".">
                          <Link to="/pendidik"> SMP Islam Ainul Huda </Link>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/ppdb">PENGEMBANGAN</Link>
                  </li>
                  <li>
                    <div className="dropdown" onClick={this.toggleOpen}>
                      <button
                        className="btn btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                      >
                        PPDB
                      </button>
                      <div
                        className={menuClass}
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href=".">
                        <Link to="/ppdb">PDF Ainul Huda (Diniah)</Link>
                        </a>
                        <a className="dropdown-item" href=".">
                          <Link to="/ppdb">SMP Islam Ainul Huda</Link>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link scrollto"
                      href="https://wa.me/+6283143506069?text=Saya%20mau%20bertanya%20mengenai%20PPDB%20SMP%20Islam%20Ainul%20Huda..%3F%0A"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    );
  }
}

export default Header;
