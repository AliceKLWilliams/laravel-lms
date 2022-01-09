import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import Button from '@/Components/Button';

export default function({course, users}) {
    const { delete: destroy } = useForm({});

    return (
        <table className="table">
			<thead>
				<tr>
					<td>Email</td>
					<td>Actions</td>
				</tr>
			</thead>
			<tbody>
				{(!users || !users.length) && <tr><td colSpan="2">No users yet.</td></tr>}

				{users.map(user => (
					<tr key={user.id}>
						<td>{user.email}</td>
						<td>
                            <form onSubmit={e => {
                                e.preventDefault();
                                destroy(route('admin.course.user.destroy', {
                                    course,
                                    user
                                }));
                            }}>
                                <Button>Remove</Button>
                            </form>
                        </td>
					</tr>
				))}
			</tbody>
		</table>
    )
}