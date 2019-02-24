import React from "react";
import { Link } from "react-router-dom";
// Export Stateless functional component
//Description, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`} activeclassname="is-active">
      <h3>{description}</h3>
    </Link>

    <p>
      amount = {amount} Date = {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
