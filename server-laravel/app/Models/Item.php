<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'item_cates', 'item_id', 'cate_id');
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class);
    }
}
