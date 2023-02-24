<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = [
        'cate_id',
        'cate_name',
        'parent_cate_id',
    ];

    public function items()
    {
        return $this->belongsToMany(Item::class, 'item_cates', 'cate_id', 'item_id');
    }
    public function subcategory()
    {
        return $this->hasMany(Category::class, 'parent_cate_id', 'cate_id')->with('subcategory');
    }

    public function parents()
    {
        return $this->belongsTo(Category::class, 'parent_cate_id', 'cate_id')->with('parents');
    }
}
