
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import FormAddFriend from './Components/FormAddFriend';
import FormSplitBill from './Components/FormSplitBill';
import FriendList from './Components/FriendList';
import './index.css';
import { initialFriends } from './Data/InitialFriends';


function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends)

  const [selectedFriend, setSelectedFriend] = useState(null);



  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);

    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)
    setShowAddFriend(false);

  }

  const handleSplitBill = (value) => {

    setFriends((frs) => frs.map(fr => fr.id === selectedFriend.id ? { ...fr, balance: fr.balance + value } : fr))

    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {
          showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />
        }
        <Button onclick={handleShowAddFriend}>
          {
            showAddFriend ? "Close" : "Add Friend"
          }
        </Button>
      </div>
      {
        selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      }
    </div>
  );
}

export default App;
