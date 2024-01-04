import React , {useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErroeModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input",
                message: 'please enter a valid name and age (non-empty values).'
            });
            return;
        };
        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                message: 'please enter a valid age ( >0 ).'
            });
            return;
        };
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErroeModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >user name</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age" >age</label>
                    <input type="number"id="age"  value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;