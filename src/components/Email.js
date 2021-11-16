import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div className="section section-no-padding" id="contact-us">
        <div className="parallax filter-gradient blue" data-color="red  ">
          <div className="parallax-background">
            <img
              className="parallax-background-image"
              src="assets/img/template/bg3.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h1>CONTACT US</h1>
            <p> You can send us an email by clicking</p>
            <a
              href="mailto: actorgointernational@gmail.com"
              className="btn btn-neutral btn-lg btn-fill"
            >
              SEND EMAIL
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Email;
