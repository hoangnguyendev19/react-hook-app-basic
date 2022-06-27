// HobbyList.propTypes = {
//   hobbyList: PropTypes.array,
// };

// HobbyList.defaultProps = {
//   hobbyList: [],
// };

const HobbyList = (props) => {
  const { myHobbyList, activeId, handleActiveId } = props;

  const handleOnClick = (hobby) => {
    props.handleActiveId(hobby);
  };
  return (
    <ul className="hobby-list">
      {myHobbyList &&
        myHobbyList.length > 0 &&
        myHobbyList.map((item) => {
          return (
            <li
              key={item.id}
              className="active"
              onClick={() => handleOnClick(item)}
            >
              {item.title}
            </li>
          );
        })}
    </ul>
  );
};

export default HobbyList;
