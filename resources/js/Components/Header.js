import React from 'react';
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@inertiajs/inertia-react';

export default function() {

    const { auth } = usePage().props

    return (
        <header className="bg-green-200 p-4 shadow">
            <div className="flex items-center max-w-5xl mx-auto justify-end">
                <nav>
                    <ul className="flex items-center gap-4">
                        <li><Link href={route('my-courses')}>My Courses</Link></li>
                        {auth.user && <Link href="/logout" method="post" as="button" type="button">Logout</Link>}
                        {!auth.user && <li><Link href={route('login')}>Login</Link></li>}
                    </ul>
                </nav>
           </div>
        </header>
    )
}