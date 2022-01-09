import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({modules, course}) {
    if (!modules || !modules.length) {
        return <p>No modules.</p>
    }

    return (
        <ul>
            {modules.map(module => (
                <li key={module.id}>{module.title} <Link className="underline" href={route('course.module.show', {
                    course,
                    module
                })}>View Module</Link></li>
            ))}
        </ul>
    )
}