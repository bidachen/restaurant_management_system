import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Header = props => {
  console.log(props);
  return (
    <div>
      <Row>
        <Col>
          <h1>My restaurent</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>table avaible: {props.totalMoney}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>money earned:</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
