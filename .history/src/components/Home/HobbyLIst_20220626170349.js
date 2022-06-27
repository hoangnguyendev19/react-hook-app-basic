const HobbyList = (props) => {
  console.log(props);
  const myHobbyList = props;
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
