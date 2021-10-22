import LinkButton from '@/Components/LinkButton';
import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import CourseTable from '../../../Components/Admin/Course/CourseTable';

const Index = ({courses, auth, errors}) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}>
                <LinkButton href={route('admin.course.create')} className="mb-4">Create Course</LinkButton>
            <CourseTable courses={courses} />
        </Authenticated>
    )
}

export default Index;