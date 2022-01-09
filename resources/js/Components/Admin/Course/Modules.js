import React from 'react';
import LinkButton from '@/Components/LinkButton';
import ModuleTable from '../Module/ModuleTable';

export default function({course, modules}) {
    return (
        <>
            <div className="flex justify-between gap-4 items-center mb-4">
                <h2>Modules</h2>
                <LinkButton href={route('admin.course.module.create', course)} className="mb-2">Add Module</LinkButton>
            </div>
            <ModuleTable modules={modules} course={course}/>
        </>
    )
}