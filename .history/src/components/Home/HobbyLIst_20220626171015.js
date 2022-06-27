// HobbyList.propTypes = {
//   hobbyList: PropTypes.array,
// };

// HobbyList.defaultProps = {
//   hobbyList: [],
// };

const HobbyList = (props) => {
  console.log(props);
  const [myHobbyList] = props;
  return (
    <ul>
      {myHobbyList &&
        myHobbyList.length > 0 &&
        myHobbyList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
  );
};

export default HobbyList;
