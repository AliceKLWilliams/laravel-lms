import { useForm } from '@inertiajs/inertia-react';
import dayjs from 'dayjs'
import React from 'react'
import { Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function({lessons, course, module}) {
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
				{(!lessons || !lessons.length) && <tr><td colSpan="2">No lessons yet.</td></tr>}

				{lessons.map(lesson => (
					<tr key={lesson.id}>
						<td>{lesson.title}</td>
						<td>{dayjs(lesson.created_at).format('DD/MM/YYYY')}</td>
						<td>
							<div className="flex flex-wrap gap-4 items-center">
								<Link href={route('admin.course.module.lesson.edit', {
									course,
									module,
									lesson
								})}>
                                    Edit
                                </Link>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    destroy(route('admin.course.module.lesson.destroy', {
										course,
										module,
										lesson
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