import CourseCard from '@/Components/Front/Course/CourseCard';
import Layout from '@/Layouts/Layout';
import React from 'react';

export default function({courses}) {
    let content = <p>Sorry, you aren't assigned any courses.</p>
    if(courses && courses.length){
        content = (
            <ul className="grid gap-4 md:grid-cols-2">
                {courses.map(course => (
                    <li key={course.id}>
                        <CourseCard course={course} />
                    </li>
                ))}
            </ul>
        )
    }

    return(
        <Layout>
            <h1>My Courses</h1>
            
            {content}
        </Layout>
    )
}