<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Is the User an Admin?
     * 
     * @return boolean
     */
    public function isAdmin()
    {
        return $this->userRole->name === 'admin';
    }

    public function userRole()
    {
        return $this->belongsTo(UserRole::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }

    public function completedLessons()
    {
        return $this->belongsToMany(Lesson::class, 'lesson_user');
    }

    public function completeLesson(Lesson $lesson)
    {
        $hasCompletedLesson = $this->hasCompleted($lesson);
        
        if (!$hasCompletedLesson) {
            $this->completedLessons()->attach($this);
        }
    }

    public function hasCompleted(Lesson $lesson)
    {
        return $this->completedLessons->contains($lesson->id);
    }
}
