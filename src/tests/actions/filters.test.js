import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("Test setStartDate should generate start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: "SET_START_DATE", startDate: moment(0) });
});

test("Test setEndDate should generate end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

test("Test setTextFilter should generate text filter object", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "rent" });
});
test("Test setTextFilter with no parameter", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: expect.any(String) });
});

test("Test sortByDate should generate sortby date object", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("Test sortByAmount should generate sortby amount object", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});
