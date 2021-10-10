import Authenticated from '@/Layouts/Authenticated';
import React, { useRef } from 'react';

import { useForm } from '@inertiajs/inertia-react'
import CourseFields from './CourseFields';
import Button from '@/Components/Button';
import ModuleTable from '../Module/ModuleTable';
import LinkButton from '@/Components/LinkButton';

const Index = ({course, modules, auth, errors}) => {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit {course.title}</h2>}>
            <form
            className="mb-8"
            onSubmit={e => {
                e.preventDefault();
                put(route('course.update', course));
            }}>
                <CourseFields form={data} setData={setData} content={course.content} editorRef={editorRef}/>
                <Button className="mt-4">
                    Save Changes
                </Button>
            </form>

            <h2 className="text-3xl font-bold leading-none mb-2">Modules</h2>
            <LinkButton href={route('course.module.create', course)} className="mb-2">Add Module</LinkButton>
            <ModuleTable modules={modules} />
        </Authenticated>
    )
}

export default Index;