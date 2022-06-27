const initHobbyList = {
  list: [
    {
      id: 1,
      title: "My hobby 1",
    },
  ],
  activeId: null,
};

const hobbyReducer = (state = initHobbyList, action) => {
  switch (action.type) {
    case "ADD_HOBBY_LIST":
      const hobbyList = state.list;
      hobbyList.push(action.payload);
      return hobbyList;
    case "SET_ACTIVE":
      return state;
    default:
      return state;
  }
};

export default hobbyReducer;
