<?php


namespace App\Filters;

class ColoreFilter
{
    public function filter($builder, $value)
    {
        $val = preg_split("/[,]/", $value);
        $res = array();
        $res[] = $builder->where('colore', $val[0]);
        for ($x = 1; $x < count($val); $x++) {
            $res[] = $builder->orWhere('colore', $val[$x]);
        }
        return $res;
    }
}