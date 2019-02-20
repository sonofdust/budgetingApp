import React from "react";
// Export Stateless functional component
//Description, amount, createdAt

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      amount = {amount} Date = {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
