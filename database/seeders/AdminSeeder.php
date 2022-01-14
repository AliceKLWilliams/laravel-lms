<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            'Alice Williams' => 'alice@10degrees.uk',
            'John Doe' => 'test@10degrees.uk'
        ];

        $adminUserRole = UserRole::where('name', 'admin')->first();

        foreach($users as $name => $email) {
            User::create([
                'email' => $email,
                'name' => $name,
                'password' => Hash::make('password'),
                'user_role_id' => $adminUserRole->id,
            ]);
        }
    }
}
