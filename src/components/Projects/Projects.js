
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sanchari from "../../Assets/Projects/sanchari.png";
import prakriti from "../../Assets/Projects/prakriti.png";
import roleguard from "../../Assets/Projects/roleguard.png"; // Add the image path for RoleGuard
import dapp from "../../Assets/Projects/dapp.png"; // Add the image path for DApp
import emocarehub from "../../Assets/Projects/emocarehub.png"; // Add the image path for EmoCareHub

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sanchari}
              isBlog={false}
              title="Sanchari"
              description="A train ticket reservation system inspired by IRCTC, with features like train schedules, seat availability checks, and secure ticket booking."
              ghLink="https://github.com/yourusername/sanchari"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prakriti}
              isBlog={false}
              title="Prakriti"
              description="A mobile app promoting eco-friendly lifestyles through an ML-based step counter, weather and AQI monitoring, gamification, and user engagement."
              ghLink="https://github.com/RishabhDimri/Prakriti"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roleguard}
              isBlog={false}
              title="RoleGuard"
              description="A role-based access control (RBAC) system with an admin dashboard for managing users, roles, and permissions, ensuring secure access control."
              ghLink="https://github.com/RishabhDimri/RoleGuard"
              demoLink="https://role-guard-nine.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dapp}
              isBlog={false}
              title="DApp"
              description="A transparent decentralized lottery app built on Ethereum using React.js, Solidity, and Ether.js, allowing users to participate via MetaMask wallets."
              ghLink="https://github.com/RishabhDimri/Lottery-DApp"
              demoLink="https://lotterydapp.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emocarehub}
              isBlog={false}
              title="EmoCareHub"
              description="A user-centric website providing personalized depression analysis, local psychologist recommendations, and tailored mental well-being support with an advanced chatbot."
              ghLink="https://github.com/RishabhDimri/EmoCare-Hub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
