import Authenticated from '@/Layouts/Authenticated';
import React, {useState} from 'react';

import EditForm from '@/Components/Admin/Course/EditForm';
import Modules from '@/Components/Admin/Course/Modules';
import Users from '@/Components/Admin/Course/Users';

const Index = ({course, modules, users, auth, errors}) => {
    let [currentTab, setCurrentTab] = useState('');

    let content = <EditForm course={course}/>;
    if(currentTab === 'modules') {
        content = <Modules course={course} modules={modules} />
    } else if(currentTab === 'users') {
        content = <Users course={course} users={users}/>
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit {course.title}</h2>}>

            <div className="mb-6 flex items-center gap-4 flex-wrap">
                <button onClick={() => setCurrentTab('content')}>Content</button>
                <button onClick={() => setCurrentTab('modules')}>Modules</button>
                <button onClick={() => setCurrentTab('users')}>Users</button>
            </div>
            
            {content}

            
        </Authenticated>
    )
}

export default Index;