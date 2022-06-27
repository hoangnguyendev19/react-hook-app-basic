const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY_LIST",
    payload: hobby,
  };
};

const setActive = (hobby) => {
  return {
    type: "SET_ACTIVE",
    payload: hobby,
  };
};
