import Button from '@/Components/Button';
import { Link, useForm } from '@inertiajs/inertia-react';
import React from 'react';
import dayjs from 'dayjs';

const CourseTable = ({courses}) => {
    const {delete: destroy} = useForm({});

    return (
        <table className="bg-white rounded w-full shadow">
            <thead>
                <tr>
                    <th className="text-left py-4 px-5">Title</th>
                    <th className="text-left py-4 px-5">Created at</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!courses.length && <tr><td colSpan="3" className="py-4 px-5">No courses. <Link href={route('course.create')}>Create a course</Link></td></tr>}

                {courses.map(course => (
                    <tr key={course.id}>
                        <td className="py-4 px-5">{course.title}</td>
                        <td className="py-4 px-5">{dayjs(course.created_at).format('DD/MM/YYYY')}</td>
                        <td>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Link href={route('course.edit', course)}>
                                    Edit
                                </Link>
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    destroy(route('course.destroy', course));
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