import React from 'react';
import Layout from '@/Layouts/Layout';
import CourseCard from '@/Components/Front/Course/CourseCard';

export default function({courses}){
    return (
        <Layout>
            <h1>Courses</h1>

            <div className="grid md:grid-cols-2 gap-4">
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </Layout>
    )
}
