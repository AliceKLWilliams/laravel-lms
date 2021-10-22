import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({modules, course}){
    if(!modules || !modules.length) {
        return <p>No modules.</p>
    }

    return (
        <ul>
            {modules.map(module => (
                <li>{module.title} <Link className="underline" href={route('courses.modules.show', {
                    course,
                    module
                })}>View Module</Link></li>
            ))}
        </ul>
    )
}