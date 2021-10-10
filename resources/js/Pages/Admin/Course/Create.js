import Button from '@/Components/Button';
import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import CourseFields from './CourseFields';
import Authenticated from '@/Layouts/Authenticated';
import ValidationErrors from '@/Components/ValidationErrors';

const Create = ({auth, errors}) => {
	const { data, setData, post, processing, errors: formErrors } = useForm({
        title: ''
    });

	return (
		<Authenticated auth={auth} errors={errors}>
			<form onSubmit={(e) => {
				e.preventDefault();
				post(route('course.store'));
			}}>
				<ValidationErrors errors={formErrors} />

				<CourseFields form={data} setData={setData}/>
				<Button>Create</Button>
			</form>
		</Authenticated>
	)
}	

export default Create;