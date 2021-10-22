<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

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

Route::middleware(['auth'])->group(function() {
    Route::resource('course', App\Http\Controllers\Front\CourseController::class)->only(['index', 'show']);
    Route::resource('course.course', App\Http\Controllers\Front\ModuleController::class)->only(['show']);
    Route::resource('course.module.lesson', App\Http\Controllers\Front\LessonController::class)->only(['show']);
    Route::get('/my-courses', [App\Http\Controllers\Front\MyCoursesController::class, 'show'])->name('my-courses');
});

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'isAdmin'])->group(function () {
    Route::resource('course', App\Http\Controllers\Admin\CourseController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module', App\Http\Controllers\Admin\ModuleController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module.lesson', App\Http\Controllers\Admin\LessonController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);

    Route::resource('user', App\Http\Controllers\Admin\UserController::class)->only(['index', 'create', 'store']);

    Route::resource('course.user', App\Http\Controllers\Admin\CourseUserController::class)->only(['store', 'destroy']);
});



require __DIR__.'/auth.php';
