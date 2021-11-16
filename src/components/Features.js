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
                    We are doing every week two live online sessions on Instagram and Facebook in which we talk about the 
                    project and the things we do in the routine in addition to very varied topics. We would love 
                    you to join us so we can interact with you.
                  </p>
                </div>
              </div>
            </a>
          </div>{" "}
          <div className="col-md-4">
            <a href="#Stands">
              <div className="card card-blue">
                <div className="icon">
                  <i className="pe-7s-bell"></i>
                </div>
                <h4>Street stands</h4>
                <p>
                For this Christmas campaign, we have decided to take to the streets and exchange our manufactured 
                products for food, clothes or any other necessary product for the most needed people.
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
                  One of our activities is puppets, we prepare performances for our centers and we have a really
                  great time together. 
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
