<?php


namespace App\Filters;

class MarcheFilter
{
    public function filter($builder, $value)
    {
        $val = preg_split("/[,]/", $value);
        $res = array();
        $res[] = $builder->where('marche', $val[0]);
        for ($x = 1; $x < count($val); $x++) {
            $res[] = $builder->orWhere('marche', $val[$x]);
        }
        return $res;
    }
}