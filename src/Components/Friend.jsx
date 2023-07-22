import Button from "./Button"

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <div>
            <li className={isSelected ? "selected" : ""}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
                {
                    friend.balance < 0 && (
                        <p className="red">
                            You owe {friend.name} {Math.abs(friend.balance)}€
                        </p>
                    )
                }
                {
                    friend.balance > 0 && (
                        <p className="green">
                            You owe {friend.name} {Math.abs(friend.balance)}€
                        </p>
                    )
                }
                {
                    friend.balance === 0 && (

                        <p> You owe {friend.name} {Math.abs(friend.balance)}€</p>

                    )
                }
                <Button onclick={() => onSelection(friend)}>Select</Button>
            </li>

        </div>
    )
}

export default Friend
