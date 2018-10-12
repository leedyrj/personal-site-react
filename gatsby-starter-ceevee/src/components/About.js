import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepics.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>

          {`<h1>Hello world!</h1>`}

          <br />

          This ubiquitous first line of code was also my first line; and just a few short weeks after writing it, I knew that I wanted to leave the world of corporate entertainment retail where I spent the last six years to pursue this new passion.

          <br />


          One of the most exciting aspects of software development for me is the constant problem solving. Even when not coding, you'll likely to find me doing something that requires out-of-the-box thinking like rock climbing or an escape game with my Escape Team. However, what keeps me driven and excited about this new career path is the unending tide of new things to learn. I am always editing and adding to my list of "next languages" to master, reading about the next programming language to change the face of software development or trying out the upcoming features in ES7 and ES8.

          Being a lifelong learner with more ahead of me, I'm amazed at how far I've come since I wrote my first lines of code and enrolled at Nashville Software School.
        </p>
        <div className="row">
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
