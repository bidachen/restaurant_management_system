import ADD_ITEM from "./constants/constant.js";

const addItem = (name, price, tableID) => {
  return {
    type: ADD_ITEM,
    tableID: tableID,
    item: {
      name: name,
      price: price
    }
  };
};

export default addItem;
