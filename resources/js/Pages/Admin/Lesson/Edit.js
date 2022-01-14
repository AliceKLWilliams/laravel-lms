import Authenticated from '@/Layouts/Authenticated';
import React, { useState } from 'react';
import Tabs from '@/Components/Tabs';
import Tab from '@/Components/Tab';
import EditLessonForm from '@/Components/Admin/Lesson/EditLessonForm';
import QuestionsTable from '@/Components/Admin/Questions/QuestionsTable';
import LinkButton from '@/Components/LinkButton';

export default ({course, module, lesson, questions, auth, errors}) => {
    let [currentTab, setCurrentTab] = useState('content');

    let content = <EditLessonForm course={course} module={module} lesson={lesson}/>;

    if (currentTab === 'questions') {
        content = (
            <div>
                <LinkButton href={route('admin.course.module.lesson.question.create', {course, module, lesson})} className="mb-4">Create Question</LinkButton>
                <QuestionsTable questions={questions}/>
            </div>
        )
    }

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit - {lesson.title}</h2>}>

            <Tabs>
                <Tab isActive={currentTab === 'content'} onClick={() => setCurrentTab('content')}>Content</Tab>
                <Tab isActive={currentTab === 'questions'} onClick={() => setCurrentTab('questions')}>Questions</Tab>
            </Tabs>
            
            {content}
        </Authenticated>
    )
}