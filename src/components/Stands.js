import React, { Component } from "react";
import places from "../data/stands.json";
import { Scrollbars } from "react-custom-scrollbars";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

class Stands extends Component {
  render() {
    return (
      <div
        className="section vertical-scrollable  "
        id="Stands"
        style={{
          boxShadow: " 0px 0px 8px 2px  #565E92",
        }}
      >
        <div className="container  ">
          <h2 className="header-text">Street Stands</h2>
          <br />
          <Scrollbars style={{ height: 500 }}>
            {Object.keys(places).map((key, index) => (
              <div
                className="row"
                style={{
                  boxShadow: "  0px 0px 8px 2px  #565E92 ",
                  padding: "20px",
                  borderRadius: "10px",
                  margin: " 15px",
                }}
                key={index}
              >
                {index % 2 === 0 ? (
                  <div className="col-md-6 ">
                    <iframe
                      src={places[key].url}
                      width="100%"
                      height="300px "
                      style={{
                        borderWidth: "0px",
                        boxShadow: "  0px 0px 1px 1px  grey ",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      title="map1"
                    />
                  </div>
                ) : (
                  <></>
                )}

                <div className="col-md-6">
                  <h3>{key}</h3>
                  <h4>{places[key].date}</h4>
                  <p style={{ textAlign: "justify" }}>
                    {places[key].description}
                  </p>
                </div>

                {index % 2 === 1 ? (
                  <div className="col-md-6">
                    <iframe
                      src={places[key].url}
                      width="100%"
                      height="300px "
                      style={{
                        borderWidth: "0px",
                        boxShadow: "  0px 0px 1px 1px  grey ",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      title="map1"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Scrollbars>
        </div>
      </div>
    );
  }
}
export default Stands;
