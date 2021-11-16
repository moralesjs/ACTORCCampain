import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-transparent navbar-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <a
            href="https://www.facebook.com/alvaro.moralesmarquez.9"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-container">
              <div className="logo">
                <img src="assets/img/new_logo.png" alt="Creative Tim Logo" />
              </div>
              <div className="brand">ALVARO MORALES</div>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="example"></div>
      </div>
    </nav>
  );
}
export default Header;
