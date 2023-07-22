import { initialFriends } from '../Data/InitialFriends';
import Friend from './Friend';

function FriendList({ friends, onSelection, selectedFriend }) {
    // const friends = initialFriends;
    return (
        <ul>
            {
                friends.map((friend) => {
                    return <Friend key={friend.id} friend={friend}
                        onSelection={onSelection}
                        selectedFriend={selectedFriend} />;
                })
            }
        </ul>
    )
}

export default FriendList
