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
            'admin',
            'student'
        ];

        foreach ($userRoles as $userRole) {
            UserRole::create([
                'name' => $userRole
            ]);
        }
    }
}
