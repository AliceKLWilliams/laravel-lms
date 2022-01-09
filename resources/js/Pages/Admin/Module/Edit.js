import Authenticated from '@/Layouts/Authenticated';
import React, { useRef } from 'react';

import { useForm } from '@inertiajs/inertia-react'
import ModuleFields from '../../../Components/Admin/Module/ModuleFields';
import Button from '@/Components/Button';
import LessonTable from '../../../Components/Admin/Lesson/LessonTable';
import LinkButton from '@/Components/LinkButton';
import ValidationErrors from '@/Components/ValidationErrors';

export default ({course, module, lessons, auth, errors}) => {
    const { data, setData, put, transform, errors: formErrors } = useForm({
        title: module.title
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit - {module.title}</h2>}>
            <form
                className="mb-8"
                onSubmit={e => {
                    e.preventDefault();
                    put(route('admin.course.module.update', {
                        course,
                        module
                    }));
                }}>
                <ValidationErrors errors={formErrors} />
                <ModuleFields form={data} setData={setData} content={module.content} editorRef={editorRef}/>
                <Button className="mt-4">
                    Save Changes
                </Button>
            </form>

            <h2 className="text-3xl font-bold mb-4">Lessons</h2>
            <LinkButton href={route('admin.course.module.lesson.create', {
                course,
                module
            })}>Add Lesson</LinkButton>
            <LessonTable lessons={lessons} module={module} course={course} />

        </Authenticated>
    )
}