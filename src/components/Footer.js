import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-around">
        <p className="text-light m-2 p-2">
          © 2021 Crada, Inc. All rights reserved
        </p>
        <div className="social d-flex flex-row-reverse">
          <a
            href="https://facebook.com/"
            className="p-3 btn-outline-danger rounded-circle"
          >
            <BsFacebook />
          </a>
          <a
            href="https://instagram.com/"
            className="p-3 btn-outline-danger rounded-circle"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/"
            className="p-3 btn-outline-danger rounded-circle"
          >
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
