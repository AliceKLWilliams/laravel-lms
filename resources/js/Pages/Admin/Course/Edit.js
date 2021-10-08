import Authenticated from '@/Layouts/Authenticated';
import React from 'react';

import { useForm } from '@inertiajs/inertia-react'
import CourseFields from './CourseFields';
import Button from '@/Components/Button';

const Index = ({course, auth, errors}) => {
    const { data, setData, post, processing, errors: formErrors } = useForm({
        title: course.title
    });

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Course</h2>}>
            <form action="">
                <CourseFields form={data} setData={setData} />
                <Button>
                    Save Changes
                </Button>
            </form>
        </Authenticated>
    )
}

export default Index;