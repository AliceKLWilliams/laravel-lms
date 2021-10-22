import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({course, module, lessons}){
    if(!lessons || !lessons.length) {
        return <p>No lessons.</p>
    }

    return (
        <ul>
            {lessons.map(lesson => (
                <li>{lesson.title} <Link className="underline" href={route('courses.modules.lessons.show', {course, module, lesson})}>View Lesson</Link></li>
            ))}
        </ul>
    )
}