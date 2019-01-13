import React from "react";
import { render } from "react-dom";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import Header from "./header.js";
import LeftSide from "./leftSide.js";
import RightSide from "./rightSide.js";
import Middle from "./middle.js";
import HeaderContainer from "../containers/headerProps.js";

/*const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <LeftSide />
        <Middle />
        <RightSide />
      </Row>
    </Container>
  );
};*/
const App = () => {
  return <HeaderContainer />;
};
export default App;
