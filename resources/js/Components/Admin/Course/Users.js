import React from 'react';

import AddUserForm from './AddUserForm';
import CourseUserTable from './CourseUserTable';


export default function({course, users}) {
    return (
        <>
            <h2>Users</h2>

            <div className='mb-4'>
                <AddUserForm course={course} />
            </div>

            <CourseUserTable course={course} users={users} />
        </>
    )
}