import FriendListItem from "./FriendListItem";
import { FriendListStyled } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListStyled>
  );
};

export default FriendList;
