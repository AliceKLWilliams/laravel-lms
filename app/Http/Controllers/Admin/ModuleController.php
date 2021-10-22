<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreModuleRequest;
use App\Http\Requests\UpdateModuleRequest;

class ModuleController extends Controller
{
    public function create(Request $request, Course $course)
    {
        return Inertia::render('Admin/Module/Create', [
            'course' => $course,
        ]);
    }

    public function store(StoreModuleRequest $request, Course $course)
    {
        $module = Module::create(array_merge(
            $request->all(),
            [
                'course_id' => $course->id
            ]
        ));

        $course->modules()->save($module);

        return Redirect::route('admin.course.edit', $course);
    }

    public function edit(Request $request, Course $course, Module $module)
    {
        return Inertia::render('Admin/Module/Edit', [
            'module' => $module,
            'course' => $course,
            'lessons' => $module->lessons
        ]);
    }

    public function update(UpdateModuleRequest $request, Course $course, Module $module)
    {
        $module->update($request->all());

        return Redirect::route('admin.course.edit', $course);
    }

    public function destroy(Request $request, Course $course, Module $module)
    {
        $module->delete();

        return Redirect::route('admin.course.edit', $course);
    }
}
