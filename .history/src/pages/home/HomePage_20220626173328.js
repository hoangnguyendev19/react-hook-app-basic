import { useSelector, useDispatch } from "react-redux";
import { addNewHobby } from "../../actions/actions";
import HobbyList from "../../components/Home/HobbyList";

const HomePage = () => {
  const myHobbyList = useSelector((state) => state.hobby.list);
  const setActive = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  console.log(myHobbyList);

  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const newHobby = {
      id: randomId,
      title: `My hobby ${randomId}`,
    };
    console.log(newHobby);
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleActiveId = (hobby) => {
    const action = setActive(hobby);
    dispatch(action);
  };
  return (
    <div className="home-container">
      <input type="submit" onClick={handleSubmit} />
      <HobbyList myHobbyList={myHobbyList} handleActiveId={handleActiveId} />
    </div>
  );
};

export default HomePage;
