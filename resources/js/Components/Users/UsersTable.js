import React from 'react';
import LinkButton from '../LinkButton';

const UsersTable = ({users}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.user_role.display_name}</td>
                        <td>
                        <LinkButton href={route('admin.user.show', user)}>View</LinkButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersTable;