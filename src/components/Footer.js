import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="copyright">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.facebook.com/alvaro.moralesmarquez.9"
            target="_blank"
            rel="noreferrer"
          >
            Álvaro Morales
          </a>{" "}
          &{" "}
          <a
            href="https://www.facebook.com/maria.gonzalezgancedo/"
            target="_blank"
            rel="noreferrer"
          >
            María González
          </a>{" "}
          , made with love
        </div>
      </footer>
    );
  }
}

export default Footer;
