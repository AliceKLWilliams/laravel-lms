import React from 'react';
import Layout from '@/Layouts/Layout';
import ModuleList from '@/Components/Front/Module/ModuleList';

export default function({course, modules}){
    return (
        <Layout>
            <h1>{course.title}</h1>
            <div className="mb-12" dangerouslySetInnerHTML={{__html: course.content}}></div>

            <div>
                <h2>Modules</h2>
                <ModuleList modules={modules} course={course} />
            </div>
        </Layout>
    )
}
