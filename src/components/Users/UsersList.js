import clases from './UsersList.module.css';
import Card from '../UI/Card';


const UsersList = props => {
    return (
        <Card className={clases.users} >
            <ul >
                { props.users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))
                }
            </ul>
        </Card>
    )
}

export default UsersList;