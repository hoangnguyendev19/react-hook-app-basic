const initHobbyList = {
  list: [],
  setActive: null,
};

const hobby = (state = initHobbyList, action) => {
  switch (action.type) {
    case "ADD_HOBBY_LIST":
      return state;
    case "SET_ACTIVE":
      return state;
    default:
      return state;
  }
};

export default hobby;