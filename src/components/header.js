import { Jumbotron, Button } from "reactstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">My restaurent </h1>
        <p className="lead">table avaible:</p>
        <p className="lead">money earned:</p>
      </Jumbotron>
    </div>
  );
};

export default Header;
