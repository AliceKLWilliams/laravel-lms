import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Button from '@/Components/Button';

export default function({course}) {
    const { data, setData, post, errors: formErrors } = useForm({
        email: ''
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                post(route('course.user.store', course));
            }}
        >
            <ValidationErrors errors={formErrors} />
            <Label forInput="email" />
            <Input name="email" type="email" placeholder="User's email" value={data.email} handleChange={e => setData('email', e.target.value)}/>
            <Button className="mt-4">
                Add User
            </Button>
        </form>
    )
}