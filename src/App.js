import './App.css';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UsersList';
import {useState} from 'react';
import { Fragment } from 'react';

function App(props) {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [ ...prevUsersList, { name: uName, age: uAge, id: Math.random().toFixed() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={usersList} />
    </Fragment>
  );
}

export default App;
