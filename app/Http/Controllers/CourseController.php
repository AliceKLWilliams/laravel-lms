<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CourseController extends Controller
{
    public function show(Request $request, Course $course)
    {
        return Inertia::render('Front/Course/Show', [
            'course' => $course,
        ]);
    }

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
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Course/Create');
    }

    public function store(StoreCourseRequest $request)
    {
        Course::create($request->all());

        return Redirect::route('course.index');
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update($request->all());

        return Redirect::route('course.index');
    }

    public function destroy(Request $request, Course $course)
    {
        $course->delete();

        return Redirect::route('course.index');
    }
}
