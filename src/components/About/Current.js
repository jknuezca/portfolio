import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
 DiReact, 
 DiNodejs, 
 DiNpm,
 DiMongodb
} from "react-icons/di"
import {
  FaVuejs
} from "react-icons/fa"

function Current() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"> 
          <FaVuejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNpm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>                
      </Row>
    );
  }

export default Current;