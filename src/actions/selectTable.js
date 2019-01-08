import SELECT_TABLE from "./constants/constant.js";

const selectTable = tableID => {
  return {
    type: SELECT_TABLE,
    tableID: tableID
  };
};

export default selectTable;
