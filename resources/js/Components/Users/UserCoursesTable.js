import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '../Button';

export default function({courses, user}) {
	const {delete: destroy} = useForm({});

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(course => (
					<tr key={course.id}>
						<td>{course.title}</td>
						<td>
							<form onSubmit={e => {
								e.preventDefault();
								destroy(route('admin.course.destroy', {
									course,
									user
								}));
							}}>
								<Button>Remove from Course</Button>
							</form>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}