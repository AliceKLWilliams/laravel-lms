<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

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
}
