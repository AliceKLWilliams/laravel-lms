import React from 'react'
import { useForm } from '@inertiajs/inertia-react';

import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import ValidationErrors from '@/Components/ValidationErrors';
import Input from '@/Components/Input';
import Label from '@/Components/Label';

const Create = ({auth, errors, userRoles}) => {
	const { data, setData, post, transform, errors: formErrors } = useForm({
        name: '',
        email: '',
        password: '',
        user_role_id: userRoles[0].id,
    });
    

	return (
		<Authenticated auth={auth} errors={errors} header={<h2>Create User</h2>}>
			<form onSubmit={(e) => {
				e.preventDefault();
				post(route('admin.user.store'));
			}}>
				<ValidationErrors errors={formErrors} />

                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" className="mb-2" required value={data.name} handleChange={(e) => setData('name', e.target.value)}/>

                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" className="mb-2" required value={data.email} handleChange={(e) => setData('email', e.target.value)}/>

                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" className="mb-2" required value={data.password} handleChange={(e) => setData('password', e.target.value)}/>

                <Label htmlFor="user_role_id">Role</Label>
                <select name="user_role_id" required className="block border-0" value={data.user_role_id} onChange={(e) => setData('user_role_id', e.target.value)}>
                    {userRoles.map(userRole => (
                        <option key={userRole.id} value={userRole.id}>{userRole.display_name}</option>
                    ))}
                </select>

				<Button className="mt-4">Create</Button>
			</form>
		</Authenticated>
	)
}	

export default Create;