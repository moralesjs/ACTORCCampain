import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag";
import profiles from "../data/team.json";

class Descubre extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    console.log(profiles);
  }

  render() {
    return (
      <>
        <section id="team" className="pb-5">
          <div className="container">
            <h3 className="header-text">OUR TEAM</h3>
            <div className="row">
              {/* <!-- Team member --> */}

              {Object.keys(profiles)
                .filter((key) =>
                  profiles[key].pais.includes(this.props.country)
                )
                .map(
                  (key, index) => (
                    <div
                      className="col-xs-12 col-sm-6 col-md-4"
                      key={key}
                      style={{ heigh: "50px" }}
                    >
                      <div className="image-flip">
                        <div
                          className="mainflip flip-0"
                          // style={{ heigh: "50px" }}
                        >
                          <div className="frontside">
                            <div className="card">
                              <div className="card-body text-center">
                                <p>
                                  <img
                                    style={{
                                      marginTop: "60px",
                                      boxShadow:
                                        "5px 7px 15px 0px rgb(158, 158, 158)",
                                      marginBottom: "20px",
                                    }}
                                    className=" img-fluid"
                                    src={`assets/img/team/${profiles[key].foto}`}
                                    alt="mage"
                                  />
                                </p>
                                <h3>
                                  {key}{" "}
                                  <ReactCountryFlag
                                    countryCode={profiles[key].pais}
                                    svg
                                  />
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  // ) : (
                  // <></>
                  // )
                )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Descubre;
