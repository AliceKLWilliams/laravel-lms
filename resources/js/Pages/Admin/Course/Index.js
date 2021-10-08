import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import CourseTable from './CourseTable';

const Index = ({courses, auth, errors}) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Courses</h2>}>
            <CourseTable courses={courses} />
        </Authenticated>
    )
}

export default Index;