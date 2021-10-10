import React from 'react';

import {Editor} from '@tinymce/tinymce-react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';

const CourseFields = ({form, setData, editorRef, content}) => {
    
    return (
        <>
            <Label forInput="title">Title</Label>
            <Input type="text" name="title" value={form.title} handleChange={e => setData('title', e.target.value)} />

            <Label>Content</Label>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={content}
                init={{
                    height: 500,
                }}/>
        </>
    )
}

export default CourseFields;