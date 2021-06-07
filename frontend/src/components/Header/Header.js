import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render () {
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src="../../logo.svg" alt="Dashboard"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">about me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">how work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
}
export default Header;