import React from "react";

function Features() {
  return (
    <div className="section section-features">
      <div className="container">
        <h4 className="header-text text-center">Features</h4>
        <div className="row">
          <div className="col-md-4">
            <a href="#Hashtag">
              <div className="card card-blue">
                <div className="icon">
                  <i className="pe-7s-note2"></i>
                </div>
                <div className="text">
                  {" "}
                  <h4>Online Live Sessions</h4>
                  <p>
                    Every week we prepare online Session were we talk and
                    interact with all the interested people.
                  </p>
                </div>
              </div>
            </a>
          </div>{" "}
          <div className="col-md-4">
            <a href="#Hashtag">
              <div className="card card-blue">
                <div className="icon">
                  <i className="pe-7s-bell"></i>
                </div>
                <h4>Street stands</h4>
                <p>
                  Changing our manufactured products for food or clothes for the
                  most needed people
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#Puppets">
              <div className="card card-blue">
                <div className="icon">
                  <i className="pe-7s-graph1"></i>
                </div>
                <h4>Puppets show</h4>
                <p>
                  Take payments and run your business on the go, in your store
                  and then see how it all adds up with analytics.
                </p>
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
