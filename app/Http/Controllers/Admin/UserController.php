<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\UserRole;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Admin/Users/Index', [
            'users' => User::with(['userRole'])->get()
        ]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Admin/Users/Create', [
            'userRoles' => UserRole::all()
        ]);
    }

    public function show(Request $request, User $user)
    {
        return Inertia::render('Admin/Users/Show', [
            'user' => $user,
            'courses' => $user->courses,
            'role' => $user->userRole
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $request['password'] = Hash::make($request->get('password'));

        User::create($request->all());

        return Redirect::route('admin.user.index');
    }
}
