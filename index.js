const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const initialCounetrState = {
  count: 0,
};
const initialUserState = {
  users: [
    {
      name: "John",
    },
  ],
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload:user
  };
};



//! summary----

// 1. state
// 2. dispatch action
// 3. reducers based onaction type
// 4. store
// 5. view
