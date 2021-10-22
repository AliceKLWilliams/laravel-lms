import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';

export default function({course, module, lessons}){
    return (
        <Layout>
            <p><Link href={route('courses.show', course)}>{course.title}</Link> {'>'} {module.title}</p>
            <h1>{module.title}</h1>
            <div dangerouslySetInnerHTML={{__html: module.content}}></div>

            <div>
                <h2>Lessons</h2>
                <ul>
                    {lessons.map(lesson => (
                        <li>{lesson.title} <Link className="underline" href={route('courses.modules.lessons.show', {course, module, lesson})}>View Lesson</Link></li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}
