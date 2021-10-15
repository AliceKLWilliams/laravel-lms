import React from 'react';

const UsersTable = ({users}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.user_role.display_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersTable;