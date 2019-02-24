import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Finance Application</h1>
    <NavLink to="/" activeclassname="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeclassname="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/help" activeclassname="is-active">
      Help
    </NavLink>
  </header>
);
export default Header;
