import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated'
import { useForm } from '@inertiajs/inertia-react'
import React, { useRef } from 'react'
import ModuleFields from '../../../Components/Module/ModuleFields';

export default function({auth, errors, course}) {
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
			header={<h2>Create a new module</h2>}>
				<form onSubmit={e => {
					e.preventDefault();
					post(route('course.module.store', course))
				}}>
					<ModuleFields form={data} setData={setData} editorRef={editorRef}/>
					<Button>
						Create
					</Button>
				</form>
		</Authenticated>
	)
}