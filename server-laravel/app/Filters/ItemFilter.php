<?php

namespace App\Filters;

use App\Filters\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class ItemFilter extends AbstractFilter
{
    protected $filters = [
        'colore' => ColoreFilter::class,
        'genere' => GenereFilter::class,
        'marche' => MarcheFilter::class,
        'exclude_out_of_stock' => StockPriceFilter::class,
        'min_price' => MinPriceFilter::class,
        'max_price' => MaxPriceFilter::class,
        'orderBy' => PriceFilter::class,
        'eta' => EtaFilter::class,
        'taglia' => TagliaFilter::class,
        'query' => SearchFilter::class,
    ];
}