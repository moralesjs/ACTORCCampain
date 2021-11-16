import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag";
import profiles from "../data/team.json";

// const profiles = ["Alvaro", "Maria", "Gye"];

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
            <h3 className="header-text">Nuestro equipo</h3>
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
                                    style={{ marginTop: "80px" }}
                                    className=" img-fluid"
                                    src={`assets/img/team/${profiles[key].foto}`}
                                    alt="mage"
                                  />
                                </p>
                                <h4
                                // style={{ marginBottom: "20px" }}
                                >
                                  {key}{" "}
                                  <ReactCountryFlag
                                    countryCode={profiles[key].pais}
                                    svg
                                  />
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="backside">
                            <div className="card">
                              <div className="card-body text-center mt-4">
                                <h4 className="card-title">{key}</h4>

                                {profiles[key].bio ? (
                                  <p className="card-text">
                                    {profiles[key].bio}
                                  </p>
                                ) : (
                                  <p className="card-text">
                                    Aún no tiene biografia pero pronto la tendrá
                                  </p>
                                )}
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
