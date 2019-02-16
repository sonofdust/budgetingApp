import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
      case "RESET":
      return { count: 0 };
    default:
      return state;
  }
});

console.log(store.getState());
//  Actions - Object that gets send to the store.
//  I'd like to increment the count.
store.dispatch({
  type: "INCREMENT"
});
console.log(store.getState());
store.dispatch({
  type: "INCREMENT"
});
console.log(store.getState());
//RESET - set the count equal to zero.
store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});
console.log(store.getState());
//  I'd like to reset the count to zero.
