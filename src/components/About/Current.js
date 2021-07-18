import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
 DiReact, 
 DiNodejs, 
 DiNpm 
} from "react-icons/di"

function Current() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNpm />
        </Col>
      </Row>
    );
  }

export default Current;