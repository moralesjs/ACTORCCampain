import React, { Component } from "react";
import places from "../data/stands.json";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

class Stands extends Component {
  render() {
    return (
      <div className="section section-presentation  ">
        <div className="container overflow-auto">
          <h2 className="header-text">Street Stands</h2>
          <br />
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
                <h5 style={{ textAlign: "justify" }}>
                  {places[key].description}
                </h5>
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
        </div>
      </div>
    );
  }
}
// 44.38999029670344, 26.132587809280306
export default Stands;
