const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY_LIST",
    payload: hobby,
  };
};

const setActiveId = (id) => {
  return {
    type: "SET_ACTIVE_ID",
    payload: id,
  };
};

export { addNewHobby, setActiveId };
