<?php

namespace App\Http\Controllers\Front;

use App\Models\User;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class LessonUserController extends Controller
{
    public function store(Request $request, Lesson $lesson, User $user)
    {
        // Request has to come from the user
        if (!$request->user()->is($user)){
            return abort(401);
        }

        $user->completeLesson($lesson);
       
        return Redirect::route('course.module.lesson.show', [
            'course' => $lesson->course,
            'module' => $lesson->module,
            'lesson' => $lesson,
        ]);
    }
}
