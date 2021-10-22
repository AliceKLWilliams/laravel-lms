import React from 'react';
import LinkButton from '@/Components/LinkButton';
import ModuleTable from '../Module/ModuleTable';

export default function({course, modules}) {
    return (
        <>
            <h2>Modules</h2>
            <LinkButton href={route('course.module.create', course)} className="mb-2">Add Module</LinkButton>
            <ModuleTable modules={modules} course={course}/>
        </>
    )
}