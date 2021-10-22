import React from 'react';
import ApplicationLogo from './ApplicationLogo';

import { Link } from '@inertiajs/inertia-react';

export default function() {
    return (
        <header className="bg-blue-300 p-4">
            <div className="flex items-center max-w-5xl mx-auto justify-between">
                <ApplicationLogo className="w-16 h-16" />

                <nav>
                    <ul className="flex items-center gap-4">
                        <li><Link href="#">Courses</Link></li>
                    </ul>
                </nav>
           </div>
        </header>
    )
}