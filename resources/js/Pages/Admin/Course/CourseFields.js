import React from 'react';

const CourseFields = ({form, setData}) => {
    
    return (
        <>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={form.title} onChange={e => setData('title', e.target.value)} />
        </>
    )
}

export default CourseFields;