import React from "react";
import { FaDatabase, FaTag } from "react-icons/lib/fa";


import JavaScript from "../assets/images/JavaScript-logo.png";
import Reactlogo from "../assets/images/React-icon.png";
import Csharp from "../assets/images/csharp-logo.png";
import net from "../assets/images/asp-logo.png";
import SQL from "../assets/images/database-logo.png";

const Education = () => (
  <section id="technology">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Technologies.</h1>

        <div
          id="tech-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="tech-item">
            <img alt="" src={JavaScript} className="tech-pic" />
            <div >
              <h5 className="tech-sub">JavaScript</h5>
            </div>
          </div>

          <div className="tech-item">
            <img alt="" src={Reactlogo} className="tech-pic" />
            <div >
              <h5 className="tech-sub">React</h5>
            </div>
          </div>

          <div className="tech-item">
            <img alt="" src={Csharp} className="tech-pic" />
            <div >
              <h5 className="tech-sub">C#</h5>
            </div>
          </div>

          <div className="tech-item">
            <img alt="" src={SQL} className="tech-pic" />
            <div >
              <h5 className="tech-sub">SQL</h5>
            </div>
          </div>

          <div className="tech-item">
            <img alt="" src={net} className="tech-pic" />
            <div >
              <h5 className="tech-sub">.NET</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
