import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated'
import { useForm } from '@inertiajs/inertia-react'
import React, { useRef } from 'react'
import LessonFields from '../../../Components/Admin/Lesson/LessonFields';
import ValidationErrors from '@/Components/ValidationErrors';

export default function({auth, errors, course, module}) {
	const {data, setData, post, transform, errors: formErrors} = useForm({
		title: '',
		content: '',
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
			header={<h2>Create a new lesson</h2>}>
				<form onSubmit={e => {
					e.preventDefault();
					post(route('admin.course.module.lesson.store', {
                        course,
                        module
                    }))
				}}>
					<ValidationErrors errors={formErrors} />
					<LessonFields form={data} setData={setData} editorRef={editorRef}/>
					<Button>
						Create
					</Button>
				</form>
		</Authenticated>
	)
}