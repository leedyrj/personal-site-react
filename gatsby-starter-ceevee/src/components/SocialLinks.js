import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/robertleedy/" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/leedyrj" target="_blank">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
