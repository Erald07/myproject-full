<?php


namespace App\Filters;

class StockPriceFilter
{
    public function filter($builder, $value)
    {
        if($value === 'off'){
            return $builder->where('availability', 'out of stock');
        }
        if($value === 'on'){
            return $builder->where('availability', 'in stock');
        }
    }
}