import React from "react";
import { Row } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import HeaderContainer from "../containers/headerProps.js";
import LeftContainer from "../containers/leftProps.js";
import MiddleContainer from "../containers/middleProps.js";
import RightContainer from "../containers/rightProps.js";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Row>
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
      </Row>
    </div>
  );
};
export default App;
