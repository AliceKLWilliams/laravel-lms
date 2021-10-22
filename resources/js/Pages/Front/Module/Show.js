import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';
import LessonList from '@/Components/Front/Lesson/LessonList';

export default function({course, module, lessons}){
    return (
        <Layout>
            <p><Link href={route('course.show', course)}>{course.title}</Link> {'>'} {module.title}</p>
            <h1>{module.title}</h1>
            <div dangerouslySetInnerHTML={{__html: module.content}}></div>

            <div>
                <h2>Lessons</h2>
                <LessonList course={course} module={module} lessons={lessons} />
            </div>
        </Layout>
    )
}
