import React from 'react';
import Layout from '@/Layouts/Layout';
import ModuleList from '@/Components/Front/Module/ModuleList';
import { Link } from '@inertiajs/inertia-react';

export default function({course, modules}){
    return (
        <Layout>
            <p className="mb-8"><Link href={route('my-courses')}>My Courses</Link> {'>'} <span>{course.title}</span></p>

            <h1>{course.title}</h1>
            <div className="mb-12" dangerouslySetInnerHTML={{__html: course.content}}></div>

            <div>
                <h2>Modules</h2>
                <ModuleList modules={modules} course={course} />
            </div>
        </Layout>
    )
}
