import DELETE_ITEM from "./constants/constant.js";

const deleteItem = (index, tableID) => {
  return {
    type: DELETE_ITEM,
    tableID: tableID,
    index: index
  };
};

export default deleteItem;
