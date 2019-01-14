import Middle from "../components/middle.js";
import { connect } from "react-redux";
import selectTable from "../actions/selectTable.js";

const dispatchToProps = dispatch => {
  return {
    onSelect: tableID => {
      dispatch(selectTable(tableID));
    }
  };
};

const MiddleContainer = connect(
  null,
  dispatchToProps
)(Middle);

export default MiddleContainer;
