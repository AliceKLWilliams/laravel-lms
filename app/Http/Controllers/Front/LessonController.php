<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LessonController extends Controller
{
    public function show(Request $request, Course $course, Module $module, Lesson $lesson)
    {
        $this->authorize('view', $lesson);

        $user = Auth::user();

        return Inertia::render('Front/Lesson/Show', [
            'course' => $course,
            'module' => $module,
            'lesson' => $lesson,
            'user' => Auth::user(),
            'isComplete' => $user->hasCompleted($lesson)
        ]);
    }
}
