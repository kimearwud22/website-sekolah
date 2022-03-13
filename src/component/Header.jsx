import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center text-white">
            <a href="contact-us" className="d-none d-md-block d-lg-block mx-1">
              Hubungi Kami
            </a>
            <a href className="d-none d-md-block d-lg-block mx-1">
              <i className="fa fa-instagram">smpi.ainul Huda</i>
            </a>
            <a href="tel:" className="d-none d-md-block d-lg-block mx-1">
              <i className="fa fa-phone">0829198645</i>
            </a>
          </div>
          <div className="contact-info d-none d-lg-flex social-links align-items-center">
            <a href="#facebook" className="facebook">
              <i className="fa fa-facebook-square">smpi.ainul huda</i>
            </a>
            <a href="#instagram" className="instagram">
              <i className="fa fa-instagram">smpi.ainul Huda</i>
            </a>
          </div>
        </div>
      </div>
      <header>
        <div id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <img src="img/logo1.png" alt="" srcset="" />
              <a href=".">SMPI Ainul Huda</a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link to="/">Beranda</Link>
                </li>
                <li>
                  <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                  <Link to="/about">Tentang SMPI</Link>
                </li>
                <li>
                  <Link to="/gallery">PPDB</Link>
                </li>

                <li>
                  <a
                    className="nav-link scrollto"
                    href="https://wa.me/+6283143506069?text=Saya%20mau%20bertanya%20mengenai%20PPDB%20SMP%20Islam%20Ainul%20Huda..%3F%0A"
                  >
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
    
  );
};
export default Header;
