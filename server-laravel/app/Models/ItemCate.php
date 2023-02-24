<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCate extends Model
{
    use HasFactory;
    protected $table = 'item_cates';
    protected $fillable = [
        'item_id',
        'cate_id',
        'order_id',
    ];
}
