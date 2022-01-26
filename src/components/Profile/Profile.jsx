import PropTypes from 'prop-types';
import { ProfileStyled, Name, Stats, StatsLabel } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="100px" />
        <Name>{username}</Name>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
