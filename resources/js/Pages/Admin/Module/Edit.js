import Authenticated from '@/Layouts/Authenticated';
import React, { useRef } from 'react';

import { useForm } from '@inertiajs/inertia-react'
import ModuleFields from './ModuleFields';
import Button from '@/Components/Button';

export default ({course, module, auth, errors}) => {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit {module.title}</h2>}>
            <form
            className="mb-8"
            onSubmit={e => {
                e.preventDefault();
                put(route('course.module.update', {
					course,
					module
				}));
            }}>
                <ModuleFields form={data} setData={setData} content={module.content} editorRef={editorRef}/>
                <Button className="mt-4">
                    Save Changes
                </Button>
            </form>
        </Authenticated>
    )
}