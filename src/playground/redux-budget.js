import { createStore, combineReducers } from "redux";

console.log("Doing the Budget");

const demoState = {
  expense: [
    {
      id: "xkse",
      description: "January Rent",
      note: "This is my final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
