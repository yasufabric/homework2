import React, { Component } from "react";
import "./App.css";
import logoWhite from "./assets/liven-logos/liven-logo-white-ee1baa2fc3f9ed337b966e4fdea3bb85cc962cf99587b30f52deb2eab7578732.svg";
import logoRed from "./assets/liven-logos/liven-logo-red-90dd22ba307ff1e59019e21d999b4615bc63b821d16d92ecc465ceaf3924837c.svg";
import whiteWave from "./assets/shared/white-wave-b642b0f1065f11f465b4453bcea9eef1d7e51b1920c347e90c76a3e507282115.png";
import vphone from "./assets/shared/food-vectors/phone-2e91107db0adc5d33fed95e8efa76cbe4b0058dbcc19be826f75106ec66481c9.svg";
import chopsticks from "./assets/shared/food-vectors/chopsticks-ef63ad407df9ec8925828c2846f677304fcda9619b3779fb640590e257620ba0.svg";
import plate from "./assets/shared/food-vectors/plate-3cb07a62f0a7297756b552ee5400d4786524cfd3aada3a1a39fb7854eec7da42.svg";
import cup from "./assets/shared/food-vectors/cup-55f9805d8bfe74fd6343f83adff4d3b49281844e004af8b4aea87b3b46474257.svg";
import sauce from "./assets/shared/food-vectors/sauce-639155208ba1b47324518a2311197b1fd2c57cfb725f066f9cdebe6dddce6579.svg";

class App extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <div className="site-wrapper">
        <header id="header" className={this.state.isTop ? "" : "sticky"}>
          <div className="wrapper">
            <div className="header-content">
              <a class="home" href="/">
                <img
                  className="logo-white"
                  src={logoWhite}
                  alt="Liven logo white"
                />
                <img className="logo-red" src={logoRed} alt="Liven logo red" />
              </a>
              <nav>
                <a
                  target="blank"
                  className="sm-screen-hide"
                  href="http://youtube.com/user/livenaustralia"
                >
                  Videos
                </a>
                <a
                  target="blank"
                  className="sm-screen-hide"
                  href="http://liven.blog"
                >
                  Blog
                </a>
                <a className="sm-screen-hide" href="/merchant.html#partner">
                  Partner
                </a>
                <a
                  className="sm-screen-hide"
                  href="https://app.liven.com.au/F4kq7V1A4P"
                >
                  Download
                </a>
                <a
                  className="sm-screen-hide btn btn-white"
                  href="https://livenpay.io"
                >
                  Token Sale
                </a>
                <i
                  id="hamburger"
                  className="fa fa-bars hamburger"
                  aria-hidden="true"
                />
              </nav>
            </div>
          </div>
        </header>
        <section className="banner">
          <div className="banner-contetns" />
          <div className="wrapper" />
          <div className="call-to-action">
            <h1>
              Find, Eat, <br /> Earn, Repeat
            </h1>
            <h2>
              Sign up now and get <br className="mobile-break" />
              free
              <span className="typewriter">
                {""} food!
                <span aria-hidden="true" />
              </span>
            </h2>
            <div className="btn-container">
              <a className="btn-large btn-white" href="#">
                Get Started
              </a>
              <p className="small">*New Users Only</p>
            </div>
          </div>
          <img className="white-wave" src={whiteWave} alt="white-wave" />
        </section>
        <div class="vector-imgs-abs">
          <div id="vector-images-container" className="fadeUpAndInA">
            <img className="vphone" src={vphone} alt="Phone" />
            <img className="chopsticks" src={chopsticks} alt="chopstic" />
            <img className="plate" src={plate} alt="plate" />
            <img className="cup" src={cup} alt="cup" />
            <img className="sauce" src={sauce} alt="sauce" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
