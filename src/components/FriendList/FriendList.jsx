import PropTypes from "prop-types";
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}> {friends.map(({id, name, isOnline, avatar}) => {
        return <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar} />
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