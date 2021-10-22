import Button from '@/Components/Button';
import React, { useRef } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import CourseFields from '../../../Components/Admin/Course/CourseFields';
import Authenticated from '@/Layouts/Authenticated';
import ValidationErrors from '@/Components/ValidationErrors';

const Create = ({auth, errors}) => {
	const { data, setData, post, transform, errors: formErrors } = useForm({
        title: ''
    });

	let editorRef = useRef(null);

	transform(data => ({
		...data,
		content: editorRef.current.getContent()
	}));

	return (
		<Authenticated auth={auth} errors={errors} header={<h2>Create Course</h2>}>
			<form onSubmit={(e) => {
				e.preventDefault();
				post(route('admin.course.store'));
			}}>
				<ValidationErrors errors={formErrors} />

				<CourseFields form={data} setData={setData} editorRef={editorRef}/>
				<Button className="mt-4">Create</Button>
			</form>
		</Authenticated>
	)
}	

export default Create;