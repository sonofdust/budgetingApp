import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("should edit expense", () => {
  const action = editExpense("123abc", { note: "Here are my notes." });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "Here are my notes." }
  });
});

test("Adding expense testing with object", () => {
  const expenseData = {
    note: "Here are my notes.",
    description: "This is really good stuff",
    amount: 19293838,
    createdAt: 209340394
  };
  const action = addExpense(expenseData);
  //  console.log("HERE IS MY ACTION:", action);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) }
  });
});

test("Adding expense testing with no parameters", () => {
  const object = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...object,
      id: expect.any(String)
    }
  });
});
