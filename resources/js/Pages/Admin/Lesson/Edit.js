import Authenticated from '@/Layouts/Authenticated';
import React, { useRef } from 'react';

import { useForm } from '@inertiajs/inertia-react'
import Button from '@/Components/Button';
import LessonFields from '../../../Components/Lesson/LessonFields';

export default ({course, module, lesson, auth, errors}) => {
    const { data, setData, put, transform, errors: formErrors } = useForm({
        title: lesson.title
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit {lesson.title}</h2>}>
            <form
                className="mb-8"
                onSubmit={e => {
                    e.preventDefault();
                    put(route('course.module.lesson.update', {
                        course,
                        module,
                        lesson
                    }));
                }}>
                <LessonFields form={data} setData={setData} content={lesson.content} editorRef={editorRef}/>
                <Button className="mt-4">
                    Save Changes
                </Button>
            </form>

        </Authenticated>
    )
}