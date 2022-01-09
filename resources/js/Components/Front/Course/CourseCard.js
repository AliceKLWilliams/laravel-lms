import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({course}){
    return (
        <div className="shadow p-4 rounded">
            <h2 className="h5">{course.title}</h2>
            <Link href={route('course.show', course)}>View Course</Link>
        </div>
    )
}