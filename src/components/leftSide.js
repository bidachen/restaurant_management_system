import { Button, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const LeftSide = props => {
  let totalBill = 0;
  let orders = [];
  if (props.selectTable) {
    orders = props.tableItems[props.selectTable].map((item, index) => {
      totalBill += item.price;
      return (
        <div>
          <Button
            id={index}
            key={index}
            onClick={event => {
              props.onDelete(props.selectTable, event.target.id);
            }}
          >
            X
          </Button>
          {item.name} | ${item.price}
        </div>
      );
    });
  }
  let check = "Check In";
  if (props.selectTable && props.activeTable[props.selectTable])
    check = "Check Out";
  return (
    <Col className="left" xs="2">
      <h3>Table #: {props.selectTable}</h3>
      <Button
        color="success"
        onClick={() => props.onActive(props.selectTable, totalBill)}
      >
        {check}
      </Button>
      <h5>Bill total: {totalBill}</h5>
      <h6>Orders: {orders}</h6>
    </Col>
  );
};

export default LeftSide;
