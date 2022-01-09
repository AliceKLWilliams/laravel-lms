<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Module;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ModuleController extends Controller
{
    public function show(Request $request, Course $course, Module $module)
    {
        $this->authorize('view', $module);

        return Inertia::render('Front/Module/Show', [
            'course' => $course,
            'module' => $module,
            'lessons' => $module->lessons
        ]);
    }
}
