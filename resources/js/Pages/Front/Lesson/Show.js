import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';
import CompleteLesson from '@/Components/Front/Lesson/CompleteLesson';

export default function({course, module, lesson, user, isComplete}){
    return (
        <Layout>
            <p><Link href={route('course.show', course)}>{course.title}</Link> {'>'} <Link href={route('course.module.show', {course, module})}>{module.title}</Link> {'>'} {lesson.title}</p>
            <h1>{lesson.title}</h1>
            <div className='mb-6' dangerouslySetInnerHTML={{__html: lesson.content}}></div>

            <CompleteLesson lesson={lesson} user={user} isComplete={isComplete}/>
        </Layout>
    )
}
