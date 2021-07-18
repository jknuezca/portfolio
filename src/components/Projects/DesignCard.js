import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function DesignCards(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (    
      <Card className="design-card-view">
        
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            View Full Image
          </Button>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Card.Img src={props.imgFull}/>
            </Modal.Body>
        </Modal>
      </Card>
    );
  }
  export default DesignCards;