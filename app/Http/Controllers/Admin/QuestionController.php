<?php

namespace App\Http\Controllers\Admin;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    public function create(Request $request, Course $course, Module $module, Lesson $lesson)
    {
        return Inertia::render('Admin/Question/Create');
    }
}
