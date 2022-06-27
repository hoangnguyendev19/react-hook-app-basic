const initHobbyList = {
  list: [
    {
      id: 1,
      title: "My hobby 1",
    },
    {
      id: 2,
      title: "My hobby 2",
    },
  ],
  activeId: null,
};

const hobbyReducer = (state = initHobbyList, action) => {
  switch (action.type) {
    case "ADD_HOBBY_LIST":
      const hobbyList = [...state.list];
      hobbyList.push(action.payload);
      const newState = {
        ...state,
        list: hobbyList,
      };
      return newState;
    case "SET_ACTIVE_ID":
      const newActiveId = action.payload.id;
      const newStateId = {
        ...state,
        activeId: newActiveId,
      };
      return newStateId;
    default:
      return state;
  }
};

export default hobbyReducer;
