<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MyCoursesController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        return Inertia::render('Front/MyCourses', [
            'courses' => $user->courses
        ]);
    }
}
