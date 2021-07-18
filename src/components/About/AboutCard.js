import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jorge Kenneth Nuezca </span>
            from <span className="purple"> Baguio City, Philippines.</span>
            <br />I graduated <span className="purple">Bachelor of Science in Information Technology</span> at <span className="purple">Saint Louis University.</span>
            <br />
            <br />
            <span className="purple"> I experienced :</span>
            <br />
            <span className="purple">Collaborating</span> with designers and other team members to create clean interfaces and to optimize the experience and interactions with the user.
            <br />
            <span className="purple">Communicating</span> with clients if changes in the design is needed to be done and worked with them to come up with the best solution, tracking and project coordination.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
