import React, { Component } from "react";

const liveFile = "assets/img/live/";
const lives = [
  "live1.png",
  "live2.jpeg",
  "live3.png",
  "live4.png",
  "live5.png",
];

class Hashtag extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: null };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="section section-demo" id="Hashtag">
        <div className="container">
          <div className="row" id="#Hashtag">
            <div className="col-md-6">
              <div
                id="description-carousel"
                className="carousel fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {lives.map((live, index) => (
                    <div
                      className={index === 0 ? "item active" : "item"}
                      key={live}
                    >
                      <img src={`${liveFile}${live}`} alt="" />
                    </div>
                  ))}
                </div>
                <ol className="carousel-indicators carousel-indicators-blue">
                  {lives.map((live, index) => (
                    <li
                      data-target="#description-carousel"
                      data-slide-to={`${index}`}
                      className={index === 0 ? "active" : ""}
                      key={live}
                    ></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
              <h3 className="header-text">Our lives!</h3>
              <p>Here you can find all live videos done since now.</p>
              <p>
              We are excited about a new activity we are starting these days. We thought we would do 
                    every week two live online sessions on Instagram and Facebook in which we talk about the 
                    project and the things we do in the routine in addition to very varied topics. We would love 
                    you to join us so we can interact with you.
              </p>
              <a
                href="https://www.instagram.com/solidairactor/"
                id="Demo3"
                className="btn btn-fill btn-info"
                data-button="info"
                target="_blank"
                rel="noreferrer"
              >
                HERE FOR MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hashtag;
