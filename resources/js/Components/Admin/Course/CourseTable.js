import Button from '@/Components/Button';
import { Link, useForm } from '@inertiajs/inertia-react';
import React from 'react';
import dayjs from 'dayjs';

const CourseTable = ({courses}) => {
    const {delete: destroy} = useForm({});

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Created at</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!courses.length && <tr><td colSpan="3">No courses. <Link href={route('admin.course.create')}>Create a course</Link></td></tr>}

                {courses.map(course => (
                    <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{dayjs(course.created_at).format('DD/MM/YYYY')}</td>
                        <td>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Link href={route('course.show', course)}>View</Link>
                                <Link href={route('admin.course.edit', course)}>
                                    Edit
                                </Link>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    destroy(route('admin.course.destroy', course));
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

export default CourseTable;