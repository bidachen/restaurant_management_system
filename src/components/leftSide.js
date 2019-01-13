import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const LeftSide = props => {
  return (
    <Col className="left" xs="2">
      <h3>Table #:</h3>
      <Button color="success"> check in</Button>
      <h5>Bill total: </h5>
      <h6>Orders:</h6>
    </Col>
  );
};

export default LeftSide;
