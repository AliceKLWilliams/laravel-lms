import Input from '@/Components/Input';
import Label from '@/Components/Label';
import React from 'react';

const CourseFields = ({form, setData}) => {
    
    return (
        <>
            <Label forInput="title">Title</Label>
            <Input type="text" name="title" value={form.title} handleChange={e => setData('title', e.target.value)} />
        </>
    )
}

export default CourseFields;