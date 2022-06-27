const HobbyList = (props) => {
  const [hobbyList] = props;
  return (
    <ul>
      {hobbyList &&
        hobbyList.length > 0 &&
        hobbyList.map((item) => {
          <li key={item.id}>{item.title}</li>;
        })}
    </ul>
  );
};

export default HobbyList;
