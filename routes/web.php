<?php

use App\Http\Controllers\Admin\CourseUserController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::resource('/courses', App\Http\Controllers\Front\CourseController::class)->only(['index', 'show']);
Route::resource('courses.modules', App\Http\Controllers\Front\ModuleController::class)->only(['show']);
Route::resource('courses.modules.lessons', App\Http\Controllers\Front\LessonController::class)->only(['show']);

Route::prefix('admin')->middleware(['auth', 'verified', 'isAdmin'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('/course', App\Http\Controllers\Admin\CourseController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module', App\Http\Controllers\Admin\ModuleController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module.lesson', App\Http\Controllers\Admin\LessonController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);

    Route::resource('user', UserController::class)->only(['index', 'create', 'store']);

    Route::resource('course.user', CourseUserController::class)->only(['store', 'destroy']);
});



require __DIR__.'/auth.php';
