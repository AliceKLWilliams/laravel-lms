<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreModuleRequest;
use App\Models\Course;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

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

        return Redirect::route('course.edit', $course);
    }
}
