import { useForm } from '@inertiajs/inertia-react';
import dayjs from 'dayjs'
import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function({modules, course}) {
	const {delete: destroy} = useForm({});

	return (
		<table className="table">
			<thead>
				<tr>
					<td>Title</td>
					<td>Created at</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				{(!modules || !modules.length) && <tr><td colSpan="2">No modules yet.</td></tr>}

				{modules.map(module => (
					<tr key={module.id}>
						<td>{module.title}</td>
						<td>{dayjs(module.created_at).format('DD/MM/YYYY')}</td>
						<td>
							<div className="flex flex-wrap gap-4 items-center">
								<Link href={route('admin.course.module.edit', {
									course,
									module
								})}>
                                    Edit
                                </Link>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    destroy(route('admin.course.module.destroy', {
										course,
										module
									}));
                                }}>
                                    <Button>Delete</Button>
                                </form>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}