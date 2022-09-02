import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/JorgeKennethNuezca-Resume.pdf";
import portrait from "../../Assets/portraitc.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

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
        <Row style={{ justifyContent: "center", position: "relative"}}>
          <div className="myPortrait">
          <Tilt>
            <img src={portrait} className="img-fluid img-thumbnail center" alt="avatar" />
          </Tilt>
          </div>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="GlobalAppcasting – Content Specialist & Web Developer"
              date="July 2019 – Present"
              content={[
                "Handled work for the Advertising team and did Quality Assurance of tasks.",
                "Site maintenance, Research & Production for the contents of client magazines.",
                "Provided asset creation on multiple projects.",
                "Responsible for site maintenance, research and production for the contents of client magazines",
                "Managed different ad boards for Sports & Health, Football, Fashion, Design, Beauty & Luxury.",
                "Gathered information and entered data into the production system.",
                "Ensured that tasks assigned (moderate and critical) are delivered with quality and on time.",
                "Supported the solution to additional features and capabilities based on user requirements.",
                "Attended meeting and contributed to project and initiated brainstorming.",
                "Contributed to the product platform's architecture.",
                "Prepared and submitted reports requested by supervisor or team lead.",
                "Provided recommendations to improve processes and quality of work.",
                "Collaborated with team members to design and develop robust, scalable software solutions."
              ]}
            />
            <Resumecontent
              title="Linkage Web Development – Tier 1 Web Developer"
              date="April 2018 – May 2019"
              content={[
                "Translated wireframes into web templates and graphics for use in a content management system.",
                "Resolved client issues by establishing workarounds and solutions by debugging and creating defect fixes.",
                "Updated, modified, expanded existing websites, and drafted technical documents.",
                "WordPress customizations using Advanced Custom Fields (ACF).",
                "Optimizing website for maximum speed and scalability.",
                "Wrote well-designed, testable, efficient code by using best software development practices.",
                "Integrated data from various back-end services and databases.",
                "Took proactively care of further development and optimization of the business process within the system.",
                "Performed project tasks according to project plans and managed changes to the web system.",
                "Ensured web projects are compatible and responsive across multiple browsers and devices."
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
