<?php

namespace Database\Seeders;

use App\Models\UserRole;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userRoles = [
            'admin' => 'Admin',
            'student' => 'Student',
        ];

        foreach ($userRoles as $name => $displayName) {
            UserRole::create([
                'name' => $name,
                'display_name' => $displayName
            ]);
        }
    }
}
