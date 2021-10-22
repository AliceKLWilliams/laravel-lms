<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

class CourseController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Course/Index', [
            'courses' => Course::all(),
        ]);
    }

    public function edit(Course $course)
    {
        return Inertia::render('Admin/Course/Edit', [
            'course' => $course,
            'modules' => $course->modules,
            'users' => $course->users
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Course/Create');
    }

    public function store(StoreCourseRequest $request)
    {
        Course::create($request->all());

        return Redirect::route('admin.course.index');
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update($request->all());

        return Redirect::route('admin.course.edit', $course);
    }

    public function destroy(Request $request, Course $course)
    {
        $course->delete();

        return Redirect::route('admin.course.index');
    }
}
