import PropTypes from "prop-types";
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}> {friends.map((friend) => {
        return <FriendListItem
            key={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar} />
    })}
    </ul>
    );
};


FriendList.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired, 
};