import React, { useRef } from 'react'
import Authenticated from '@/Layouts/Authenticated';

const Create = ({auth, errors}) => {
	return (
		<Authenticated auth={auth} errors={errors} header={<h2>Create Question</h2>}>
			
		</Authenticated>
	)
}	

export default Create;