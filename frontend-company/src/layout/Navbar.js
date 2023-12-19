import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary"
        logo={logo}
        logoStyle={{ marginTop: "-5px", maxWidth: "100px", maxHeight: "45px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>{" "}
          <Link className="btn btn-success" to="/newclient">
            Ajouter un Client
          </Link>
        </div>
      </nav>
    </div>
  );
}
