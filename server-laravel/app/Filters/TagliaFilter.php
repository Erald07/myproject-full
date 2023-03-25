<?php


namespace App\Filters;

class TagliaFilter
{
    public function filter($builder, $value)
    {
        $val = preg_split("/[,]/", $value);
        $res = array();
        $res[] = $builder->where('taglia', $val[0]);
        for ($x = 1; $x < count($val); $x++) {
            $res[] = $builder->orWhere('taglia', $val[$x]);
        }
        return $res;
    }
}