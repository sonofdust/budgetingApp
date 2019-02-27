import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().starOf("month"),
    endDate: moment().endOf("month")
  });
});
