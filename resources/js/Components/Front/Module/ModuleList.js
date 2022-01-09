import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({modules, course}) {
    if (!modules || !modules.length) {
        return <p>No modules.</p>
    }

    return (
        <ul>
            {modules.map(module => (
                <li className='flex justify-between gap-4' key={module.id}>
                    {module.title} 
                    <Link href={route('course.module.show', {
                        course,
                        module
                    })}>View Module</Link>
                </li>
            ))}
        </ul>
    )
}