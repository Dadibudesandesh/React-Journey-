function UserList() {
    const users = ['sandesh', 'sandy', 'sandu'];
    return (
        <ul>
            {
                users.map((user, index) => (
                <li key={index}>{user}</li>
                ))
            }
        </ul>
    );
}

export default UserList;