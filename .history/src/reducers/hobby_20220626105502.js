const initHobbyList = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initHobbyList, action) => {
  switch (action.type) {
    case "ADD_HOBBY_LIST":
      return state;
    case "SET_ACTIVE":
      return state;
    default:
      return state;
  }
};

export default hobbyReducer;
