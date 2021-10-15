<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\UserRole;
use Illuminate\Http\Request;
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

    public function store(StoreUserRequest $request)
    {
        $request['password'] = Hash::make($request->get('password'));

        User::create($request->all());

        return Redirect::route('user.index');
    }
}