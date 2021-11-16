import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-transparent navbar-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            id="menu-toggle"
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#example"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar bar1"></span>
            <span className="icon-bar bar2"></span>
            <span className="icon-bar bar3"></span>
          </button>
          <a href="https://www.facebook.com/alvaro.moralesmarquez.9">
            <div className="logo-container">
              <div className="logo">
                <img src="assets/img/new_logo.png" alt="Creative Tim Logo" />
              </div>
              <div className="brand">ALVARO MORALES</div>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="example">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#">
                <i className="fa fa-facebook-square"></i>
                Like
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-twitter"></i>
                Tweet
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-pinterest"></i>
                Pin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
