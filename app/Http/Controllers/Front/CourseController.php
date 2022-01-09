<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    public function show(Request $request, Course $course)
    {
        $this->authorize('view', $course);

        return Inertia::render('Front/Course/Show', [
            'course' => $course,
            'modules' => $course->modules
        ]);
    }

    public function index(Request $request)
    {
        return Inertia::render('Front/Course/Index', [
            'courses' => Course::all(),
        ]);
    }
}
