import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm Robert Leedy</h1>
      <h3>
        I'm a Nashville based web developer.
          Start scrolling
        and learn more
          about me.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
