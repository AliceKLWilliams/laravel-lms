import React from 'react';
import Layout from '@/Layouts/Layout';

export default function({course}){
    console.log(course);

    return (
        <Layout>
            <h1>{course.title}</h1>
            <div dangerouslySetInnerHTML={{__html: course.content}}></div>
        </Layout>
    )
}
