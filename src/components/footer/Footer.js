import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p class="dark-mode footer-text">© 2021 - Thuong Nguyen Portfolio</p>
      </div>
    </Fade>
  );
}
