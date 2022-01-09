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
                post(route('admin.course.user.store', course));
            }}
        >
            <ValidationErrors errors={formErrors} />
            <div className="flex items-end gap-4">
                <div>
                    <Label value="Email" forInput="email" />
                    <Input id="email" name="email" type="email" placeholder="User's email" value={data.email} handleChange={e => setData('email', e.target.value)}/>
                </div>
                <Button>
                    Add User
                </Button>
            </div>
        </form>
    )
}