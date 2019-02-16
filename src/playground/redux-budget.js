import { createStore, combineReducers } from "redux";

//  ADD_EXPENSE
//  REMOVE_EXPENSE
//  EDIT_EXPENSE
//  SET_TEXT_FILTER
//  SORT_BY_DATE
//  SORT_BY_AMOUNT
//  SET_START_DATE
//  SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filter reducer.
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Store Creation
const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);
console.log(store.getState());

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
