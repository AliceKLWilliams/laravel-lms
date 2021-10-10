import Authenticated from '@/Layouts/Authenticated';
import React, { useRef } from 'react';

import { useForm } from '@inertiajs/inertia-react'
import CourseFields from './CourseFields';
import Button from '@/Components/Button';

const Index = ({course, auth, errors}) => {
    const { data, setData, put, transform, errors: formErrors } = useForm({
        title: course.title
    });

    let editorRef = useRef(null);

    transform(data => ({
        ...data,
        content: editorRef.current.getContent()
    }));

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Course</h2>}>
            <form onSubmit={e => {
                e.preventDefault();
                put(route('course.update', course));
            }}>
                <CourseFields form={data} setData={setData} content={course.content} editorRef={editorRef}/>
                <Button className="mt-4">
                    Save Changes
                </Button>
            </form>
        </Authenticated>
    )
}

export default Index;