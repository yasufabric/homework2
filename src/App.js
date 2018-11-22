import React, { Component } from "react";
import "./App.css";
import logoWhite from "./assets/liven-logos/liven-logo-white-ee1baa2fc3f9ed337b966e4fdea3bb85cc962cf99587b30f52deb2eab7578732.svg";
import logoRed from "./assets/liven-logos/liven-logo-red-90dd22ba307ff1e59019e21d999b4615bc63b821d16d92ecc465ceaf3924837c.svg";
import whiteWave from "./assets/shared/white-wave-b642b0f1065f11f465b4453bcea9eef1d7e51b1920c347e90c76a3e507282115.png";
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
      </div>
    );
  }
}

export default App;
