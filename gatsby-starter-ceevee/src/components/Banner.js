import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm Robert Leedy</h1>
      <h3>
        I'm a Nashville based <span>web developer</span>,
        <span> illustrator</span> and <span> webdesigner</span> creating awesome
        and effective visual identities for companies of all sizes around the
        globe.
        <a className="smoothscroll" href="#about">
          {" "}
          Start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
