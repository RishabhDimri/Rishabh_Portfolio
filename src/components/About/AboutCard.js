import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Dimri </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br />
            I am currently a student of BTech Computer Science at Noida Institute Of Engineering & Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Comics & Novels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hardwork always pays off."{" "}
          </p>
          <footer className="blockquote-footer">Rishabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
