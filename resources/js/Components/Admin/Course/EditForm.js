import React, {useRef} from 'react';
import { useForm } from '@inertiajs/inertia-react';

import CourseFields from './CourseFields';
import ValidationErrors from '@/Components/ValidationErrors';
import Button from '@/Components/Button';

export default function({course}) {
    const { data, setData, put, transform, errors: formErrors } = useForm({
        title: course.title
    });

    let editorRef = useRef(null);

    transform(data => ({
        ...data,
        content: editorRef.current.getContent()
    }));

    return (
        <form
            className="mb-8"
            onSubmit={e => {
                e.preventDefault();
                put(route('admin.course.update', course));
            }}>
            <ValidationErrors errors={formErrors} />
            <CourseFields form={data} setData={setData} content={course.content} editorRef={editorRef}/>
            <Button className="mt-4">
                Save Changes
            </Button>
        </form>
    )
}