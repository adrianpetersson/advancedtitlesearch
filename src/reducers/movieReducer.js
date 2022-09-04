
export const reducer = (state, action) => {
    switch (action.type) {
      case "newFirstDate":
        return { ...state, firstDate: action.payload };
      case "newLastDate":
        return { ...state, lastDate: action.payload };
      case "incrementPage":
        return { ...state, count: state.count + 1 };
      case "decrementPage":
        return { ...state, count: state.count - 1 };
      default:
        throw new Error();
    }
  };