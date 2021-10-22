import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';

export default function({course, modules}){
    return (
        <Layout>
            <h1>{course.title}</h1>
            <div dangerouslySetInnerHTML={{__html: course.content}}></div>

            <div>
                <h2>Modules</h2>
                <ul>
                    {modules.map(module => (
                        <li>{module.title} <Link className="underline" href={route('courses.modules.show', {
                            course,
                            module
                        })}>View Module</Link></li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}
