<?php

namespace App\Models;

use App\Filters\ItemFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;


class Item extends Model
{
    use HasFactory;
    protected $table = 'items';
    protected $fillable = [
        'id',
        'mpn',
        'price',
        'sale_price',
        'vip_price',
        'stock',
        'availability',
        'taglia',
        'parent_id',
        'title',
        'description',
        'link',
        'image_link',
        'product_type',
        'eta',
        'marche',
        'genere',
        'personaggi',
        'colore'
    ];

    public function parent()
    {
        return $this->belongsTo(Item::class, 'id', 'parent_id')->with('parent');
    }

    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'item_cates', 'item_id', 'cate_id');
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'item_id');
    }

    public function scopeFilter(Builder $builder, $request)
    {
        return (new ItemFilter($request))->filter($builder);
    }
}
