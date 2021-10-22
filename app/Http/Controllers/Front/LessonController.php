<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\Module;

class LessonController extends Controller
{
    public function show(Request $request, Course $course, Module $module, Lesson $lesson)
    {
        return Inertia::render('Front/Lesson/Show', [
            'course' => $course,
            'module' => $module,
            'lesson' => $lesson,
        ]);
    }
}
