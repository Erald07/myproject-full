<?php


namespace App\Filters;

class GenereFilter
{
    public function filter($builder, $value)
    {
        $val = preg_split("/[,]/", $value);
        $res = array();
        $res[] = $builder->where('genere', $val[0]);
        for ($x = 1; $x < count($val); $x++) {
            $res[] = $builder->orWhere('genere', $val[$x]);
        }
        return $res;   
    }
}