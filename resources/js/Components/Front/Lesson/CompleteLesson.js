import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function({lesson, user, isComplete}) {

    const {post} = useForm();

    if (isComplete) {
        return (
            <p class="font-bold">Lesson Completed</p>
        )
    }

    const completeLesson = (e) => {
        e.preventDefault();

        post(route('lesson.user.store', {
            lesson,
            user
        }));
    }

    return (
        <form onSubmit={completeLesson}>
            <button className='py-2 px-4 bg-green-200 rounded'>Complete Lesson</button>
        </form>
    );
}