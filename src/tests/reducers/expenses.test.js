import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id.", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense with fake id.", () => {
  const action = { type: "REMOVE_EXPENSE", id: "123abc" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
/***************** ADD EXPENSE TEST   ******************/
test("should add expense.", () => {
  const expense = {
    id: "123",
    description: "New Car",
    note: "This was very expensive",
    amount: 120000,
    createdAt: 0
  };
  const action = { type: "ADD_EXPENSE", expense };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

/***************** EDIT EXPENSE TEST   ******************/
test("should edit expense.", () => {
  const amount = 120000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { amount }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

/***************** EDIT NON-EXPENSE TEST   ******************/
test("should not edit non expense.", () => {
  const amount = 120000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: { amount }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
