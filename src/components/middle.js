import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Middle = props => {
  let buttons = [];
  for (let i = 0; i < 16; i++)
    buttons.push(<Button color="info">Table {i}</Button>);
  return (
    <Col className="middle" xs="8">
      {buttons}
    </Col>
  );
};

export default Middle;
