import { combineReducers } from "redux";
import {
  ADD_ITEM,
  SELECT_TABLE,
  ACTIVE_TABLE,
  DELETE_ITEM,
  INCREASE_MONEY
} from "../constants/constants.js";

let tableList = [];
for (let i = 0; i < 16; i++) {
  tableList.push([]);
}
let tableStatus = new Array(16).fill(false);

const tableItems = (state = tableList, action) => {
  switch (action.type) {
    case ADD_ITEM:
      var newState = [...state];
      newState[action.tableID].push(action.item);
      return newState;
    case DELETE_ITEM:
      var newState = [];
      for (let i = 0; i < 16; i++) {
        newState.push([...state[i]]);
      }
      newState[action.tableID].splice(action.index, 1);
      return newState;
    case ACTIVE_TABLE:
      var newState = [...state];
      newState[action.tableID] = [];
      return newState;
    default:
      return state;
  }
};
const selectTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      if (state === action.tableID) return null;
      return action.tableID;
    default:
      return state;
  }
};

const activeTable = (state = tableStatus, action) => {
  switch (action.type) {
    case ACTIVE_TABLE:
      var newState = [...state];
      newState[action.tableID] = !newState[action.tableID];
      return newState;
    default:
      return state;
  }
};

const totalMoney = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_MONEY:
      return state + action.amount;
    default:
      return state;
  }
};
const reducer = combineReducers({
  selectTable,
  tableItems,
  activeTable,
  totalMoney
});
export default reducer;
