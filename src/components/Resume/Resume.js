import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/JorgeKennethNuezca-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Linkage Web Development – Tier 1 Web Developer"
              date="April 2018 – May 2019"
              content={[
                "Translated wireframes into web templates and graphics for use in a content management system.",
                "Resolved client issues by establishing workarounds and solutions and by debugging and creating defect fixes.",
                "Updated, modified, expanded existing websites, and drafted technical documents.",
                "WordPress customizations using Advanced Custom Fields (ACF)",
                "Optimizing website for maximum speed and scalability."
              ]}
            />
            <Resumecontent
              title="GlobalAppcasting – Content Specialist & Web Developer"
              date="July 2019 – Present"
              content={[
                "Managed work for the Advertising team and did Quality Assurance of tasks.",
                "Site maintenance, Research & Production for the contents of client magazines."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Secondary Education"
              date="2008-2012"
              content={[
                "Home Oriented Prime Education (H.O.P.E) Christian Academy Inc.",
                "La Trinidad, Benguet 2601, Philippines"
              ]}
            />
            <Resumecontent
              title="Tertiary Education"
              date="2012-2017"
              content={[
                "Saint Louis University",
                "Bachelor of Science in Information Technology",
                "Bonifacio Street, Baguio City, Benguet 2600, Philippines"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
