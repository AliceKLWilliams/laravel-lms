<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ModuleController;
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

Route::prefix('admin')->middleware(['auth', 'verified', 'isAdmin'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('/course', CourseController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module', ModuleController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);
    Route::resource('course.module.lesson', LessonController::class)->only(['index', 'edit', 'create', 'store', 'update', 'destroy']);

    Route::resource('user', UserController::class)->only(['index', 'create', 'store']);
});



require __DIR__.'/auth.php';
