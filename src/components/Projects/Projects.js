import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import DesignCard from "./DesignCard"
import Particle from "../Particle";

//Projects
import ddsgroup from "../../Assets/Projects/ddsgroup.png";
import pioneer from "../../Assets/Projects/pioneer.png";
import ojt from "../../Assets/Projects/ojt_.jpg";
import ojtfull from "../../Assets/Projects/ojtfull.png";
import bitpal from "../../Assets/Projects/bitpal.jpg";
import bitpalfull from "../../Assets/Projects/bitpalfull.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ddsgroup}
              isBlog={false}
              title="DDS Group"
              description="Created a website for DDS Group which consists a team of young professionals providing design, drafting and architectural services to home owners, residential contractors, commercial contractors and municipalities who are looking to develop unique and modern homes, buildings or structures."
              link="https://designdraftingservicesgroup.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pioneer}
              isBlog={false}
              title="Pioneer Realty"
              description="This website was created using WordPress and originally there was a PHP search function that I made for the property featured listings which was working. But now it was replaced by the client for some reason. "
              link="https://pioneerrealty.com/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Other <strong className="purple">Websites </strong>
        </h1>
          <p style={{ color: "white" }}>
            Projects that were taken down.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <DesignCard
                imgPath={ojt}
                imgFull={ojtfull}
                title="Featured Artwork"
              />
            </Col>
            <Col md={4} className="project-card">
              <DesignCard
                imgPath={bitpal}
                imgFull={bitpalfull}
                title="BitPal International"
              />
            </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
