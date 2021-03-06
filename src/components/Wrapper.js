import React from "react";
import Features from "./Features";
import Hashtag from "./Hashtag";
import Countries from "./Countries";
import Stands from "./Stands";
import Email from "./Email";

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="parallax filter-gradient blue" data-color="red">
        <div className="parallax-background">
          <img
            className="parallax-background-image"
            src="assets/img/template/bg3.jpg"
            alt="fondo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 hidden-xs">
              <div className="parallax-image">
                <img
                  className="phone"
                  src="assets/img/santac.png"
                  style={{ marginTop: "20px" }}
                  alt="Santa"
                />
              </div>
            </div>
            <div className="col-md-6 col-md-offset-1">
              <div className="description">
                <h2>A.C.T.O.R. CHRISTMAS CAMPAIGN</h2>
                <br />
                <h5>
                  WE REALLY NEED YOUR HELP! Christmas is coming and we are preparing 
                  a campaign to bring a smile to the most disadvantaged children.
                </h5>
              </div>
              <div className="buttons">
                <a
                  className="btn btn-simple btn-neutral"
                  href="https://www.instagram.com/solidairactor/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  className="btn btn-simple btn-neutral"
                  href="https://www.facebook.com/SOLIDAIRinACTOR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Countries />
      {/* <ReactCountryFlag
        className="emojiFlag"
        countryCode="US"
        style={{
          fontSize: "2em",
          lineHeight: "2em",
        }}
        aria-label="United States"
      /> */}
      <Features />
      <div
        className="section section-presentation"
        id="Puppets"
        style={{
          boxShadow: " 0px 0px 8px 2px  #565E92",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="description">
                <h4 className="header-text">Puppets Show</h4>
                <p>
                We dedicate part of our time to prepare animations for children with puppets,
                both animal and humanoid ones. Children really have a great time watching and 
                interacting with them.
                </p>
                <p>
                  In this section, you can see some of our shows. We hope you like them!
                </p>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1 hidden-xs">
              <video width="320" height="240" controls>
                <source src="assets/video/puppet1.mov" />
              </video>
            </div>
            {/* <div className="col-md-5 col-md-offset-1 hidden-xs">
              <video width="320" height="240" controls>
                <source src="assets/video/puppet2.mov" />
              </video>
            </div> */}
          </div>
        </div>
      </div>
      <Hashtag />
      <Stands />
      <br />
      {/* <div className="section section-testimonial">
        <div className="container">
          <h4 className="header-text text-center">What people think</h4>
          <div
            id="carousel-example-generic"
            className="carousel fade"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="item">
                <div className="mask">
                  <img src="assets/img/faces/face-4.jpg" alt="" />
                </div>
                <div className="carousel-testimonial-caption">
                  <p>Jay Z, Producer</p>
                  <h3>
                    "I absolutely love your app! It's truly amazing and looks
                    awesome!"
                  </h3>
                </div>
              </div>
              <div className="item active">
                <div className="mask">
                  <img src="assets/img/faces/face-3.jpg" alt="" />
                </div>
                <div className="carousel-testimonial-caption">
                  <p>Drake, Artist</p>
                  <h3>
                    "This is one of the most awesome apps I've ever seen! Wish
                    you luck Creative Tim!"
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="mask">
                  <img src="assets/img/faces/face-2.jpg" alt="" />
                </div>
                <div className="carousel-testimonial-caption">
                  <p>Rick Ross, Musician</p>
                  <h3>
                    "Loving this! Just picked it up the other day. Thank you for
                    the work you put into this."
                  </h3>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators carousel-indicators-blue">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
      </div> */}
      <Email />
    </div>
  );
}
export default Wrapper;
