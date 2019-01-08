import INCREASE_MONEY from "./constants/constant.js";

const increaseMoney = amount => {
  return {
    type: INCREASE_MONEY,
    amount: amount
  };
};

export default increaseMoney;
