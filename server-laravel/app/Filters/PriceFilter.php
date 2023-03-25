<?php


namespace App\Filters;

class PriceFilter
{
    public function filter($builder, $value)
    {
        if($value === 'price'){
            return $builder->orderBy('price', 'asc');
        }
        if($value === 'price-desc'){
            return $builder->orderBy('price', 'desc');
        }
    }
}