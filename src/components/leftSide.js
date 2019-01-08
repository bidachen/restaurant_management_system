import React from "react";
import { render } from "react-dom";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
let buttons = [];
for (let i = 0; i < 16; i++)
  buttons.push(<Button color="info">Table {i}</Button>);
class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>My restaurent</h1>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>table avaible:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>money earned:</h4>
          </Col>
        </Row>
        <Row>
          <Col className="left" xs="2">
            <h3>Table #:</h3>
            <Button color="success"> check in</Button>
            <h5>Bill total: </h5>
            <h6>Orders:</h6>
          </Col>

          <Col className="middle" xs="8">
            {buttons}
          </Col>

          <Col className="right" xs="2">
            <Button />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

const Box = props => <div className="box">{props.children} </div>;

render(<App />, document.getElementById("root"));
