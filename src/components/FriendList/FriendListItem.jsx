import PropTypes from "prop-types";
import { ListItem, FriendName, Status } from "./FriendList.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item">
      <Status className="status">{isOnline}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
