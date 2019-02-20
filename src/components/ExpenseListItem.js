import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
// Export Stateless functional component
//Description, amount, createdAt

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      amount = {amount} Date = {createdAt}
    </p>
    <button
      onClick={e => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

//export default ExpenseListItem;
export default connect()(ExpenseListItem);
