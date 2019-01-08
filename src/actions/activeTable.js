import ACTIVE_TABLE from "./constants/constant.js";

const activeTable = tableID => {
  return {
    type: ACTIVE_TABLE,
    tableID: tableID
  };
};

export default activeTable;
