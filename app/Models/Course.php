<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mews\Purifier\Facades\Purifier;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function booted()
    {
        static::creating(function($course) {
            $course->content = Purifier::clean($course->content);
        });

        static::updating(function($course) {
            $course->content = Purifier::clean($course->content);
        });
    }
}
