import React from 'react';
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@inertiajs/inertia-react';

import ApplicationLogo from './ApplicationLogo';

export default function() {

    const { auth } = usePage().props

    return (
        <header className="bg-blue-300 p-4">
            <div className="flex items-center max-w-5xl mx-auto justify-between">
                <ApplicationLogo className="w-16 h-16" />

                <nav>
                    <ul className="flex items-center gap-4">
                        <li><Link href={route('course.index')}>Courses</Link></li>
                        {!auth.user && <li><Link href={route('login')}>Login</Link></li>}
                        {auth.user && <li><Link method="post" href={route('logout')}>Logout</Link></li>}
                    </ul>
                </nav>
           </div>
        </header>
    )
}