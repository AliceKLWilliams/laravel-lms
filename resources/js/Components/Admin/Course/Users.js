import React from 'react';

import AddUserForm from './AddUserForm';
import CourseUserTable from './CourseUserTable';


export default function({course, users}) {
    return (
        <>
            <h2>Users</h2>

            <AddUserForm course={course} />

            <CourseUserTable course={course} users={users} />
        </>
    )
}