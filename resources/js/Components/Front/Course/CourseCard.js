import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({course}){
    return (
        <div className="shadow p-4 rounded">
            <h2 className="h4">{course.title}</h2>
            <Link className="underline" href={route('courses.show', course)}>View Course</Link>
        </div>
    )
}