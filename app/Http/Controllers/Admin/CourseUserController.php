<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class CourseUserController extends Controller
{
    public function store(Request $request, Course $course)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email']
        ]);

        $course->addUser($request->get('email'));

        return Redirect::route('admin.course.edit', $course);
    }

    public function destroy(Request $request, Course $course, User $user)
    {
        $course->removeUser($user);

        return back();
    }
}
