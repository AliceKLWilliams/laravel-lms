import React from 'react'; 
import LinkButton from '@/Components/LinkButton';
import Authenticated from '@/Layouts/Authenticated';
import UsersTable from '@/Components/Users/UsersTable';

const Index = ({users, auth, errors}) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}>
            <LinkButton href={route('admin.user.create')} className="mb-4">Add User</LinkButton>
            <UsersTable users={users} />
        </Authenticated>
    )
}

export default Index;