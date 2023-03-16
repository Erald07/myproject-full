<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;
    protected $table = 'galleries';
    protected $fillable = [
        'item_id',
        'image_name'
    ];

    public function item()
    {
        return $this->belongsTo(Item::class, 'id');
    }
}
