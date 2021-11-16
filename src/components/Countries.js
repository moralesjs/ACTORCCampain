import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag";
import Descubre from "./Descubre";

const countries_list = ["ES", "FR", "RO", "IT", "AT", "GE", "TR", "AR"];

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
    };
  }
  handleClick(country, e) {
    let Actuallcountry = this.state.country;
    if (Actuallcountry === country) {
      this.setState({ country: "" });
    } else {
      this.setState({ country: country });
    }
  }
  render() {
    return (
      <div className="section section-gray section-clients">
        <div className="container text-center">
          <h3 className="header-text">SOLID.A.I.R.</h3>
          <p>
            BLA BLA BLA ALGO DE INTRODUCCIÓN POR RELLENAR ESTA PRIMERA CABECERA
            MÁS ELABORADA QUE LA ANTERIOR!
            <br />
          </p>
          {countries_list.map((code) => (
            <button
              onChange={this.handleClick.bind(this, { code })}
              style={{ borderWidth: "0px" }}
              key={code}
            >
              <ReactCountryFlag
                countryCode={code}
                svg
                key={code}
                onClick={this.handleClick.bind(this, code)}
                style={{
                  width: "6.4em",
                  filter:
                    this.state.country === code
                      ? "grayscale(0)"
                      : "grayscale(0.4)",
                  height: "4.8  em",
                  margin: "6px",
                  boxShadow: "  0px 0px 8px   4px grey  ",
                }}
              />
            </button>
          ))}
          <Descubre country={this.state.country} />
        </div>
      </div>
    );
  }
}
export default Countries;
