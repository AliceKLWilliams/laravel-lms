<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\Module;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Course::factory(10)
            ->has(Module::factory()
                        ->has(Lesson::factory()->count(3), 'lessons')
                        ->count(3), 'modules')
            ->create();

    
        $this->call(UserRoleSeeder::class);
        $this->call(AdminSeeder::class);
    }
}
