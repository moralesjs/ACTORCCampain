import React from "react";
import Features from "./Features";
import Hashtag from "./Hashtag";
import Countries from "./Countries";
import Stands from "./Stands";
import Email from "./Email";

function Wrapper() {
  return (
    <div className="wrapper" id="#Hashtag">
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
                <h2>A.C.T.O.R. CHRISTMAS CAMPAING</h2>
                <br />
                <h5>
                  WE NEED YOUR HELP! Christmas is coming and we are preparing
                  everything to make this Christmas incredible for kids
                </h5>
              </div>
              <div className="buttons">
                <button className="btn btn-simple btn-neutral">
                  <i className="fa fa-twitter"></i>
                </button>
                <button className="btn btn-simple btn-neutral">
                  <i className="fa fa-instagram"></i>
                </button>
                <button className="btn btn-simple btn-neutral">
                  <i className="fa fa-facebook"></i>
                </button>
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
      <div className="section section-presentation" id="Puppets">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="description">
                <h4 className="header-text">Puppets Show</h4>
                <p>
                  And your app is also probably social, awesome, easy-to-use and
                  vital to users. This is the place to enlist all the good
                  things that your app has to share. Focus on the benefits that
                  the uers will receive. Try to combine imaginery with text and
                  show meaningful printscreens from your app, that will make it
                  clear what exactly the basic functions are.{" "}
                </p>
                <p>
                  Try to make it very clear for the people browsing the page
                  that this product will enrich their life and will make a nice
                  addition to the homescreen.
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
      <Stands
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDv7tQ42L6jgk3YQDNxz2flgX_i0X46qbE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

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
      <footer className="footer">
        <div className="container">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">Company</a>
              </li>
              <li>
                <a href="/#">Portfolio</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="social-area pull-right">
            <a className="btn btn-social btn-facebook btn-simple" href="/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a className="btn btn-social btn-twitter btn-simple" href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="btn btn-social btn-pinterest btn-simple" href="/">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>,
            made with love
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Wrapper;
