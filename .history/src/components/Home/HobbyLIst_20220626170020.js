const HobbyList = (props) => {
  const myHobbyList = props;
  console.log(myHobbyList);
  return (
    <ul>
      {myHobbyList &&
        myHobbyList.length > 0 &&
        myHobbyList.map((item) => {
          <li key={item.id}>{item.title}</li>;
        })}
    </ul>
  );
};

export default HobbyList;
