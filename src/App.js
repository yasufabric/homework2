import React, { Component } from "react";
import "./App.css";
import logoWhite from "./assets/liven-logos/liven-logo-white-ee1baa2fc3f9ed337b966e4fdea3bb85cc962cf99587b30f52deb2eab7578732.svg";
import logoRed from "./assets/liven-logos/liven-logo-red-90dd22ba307ff1e59019e21d999b4615bc63b821d16d92ecc465ceaf3924837c.svg";

class App extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
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
        <section className="banner" />
      </div>
    );
  }
}

export default App;
