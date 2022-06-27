const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY_LIST",
    payload: hobby,
  };
};

const setActiveId = (hobby) => {
  return {
    type: "SET_ACTIVE",
    payload: hobby,
  };
};

export { addNewHobby, setActiveId };
