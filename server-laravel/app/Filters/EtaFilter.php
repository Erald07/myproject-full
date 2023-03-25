<?php


namespace App\Filters;

class EtaFilter
{
    public function filter($builder, $value)
    {
        $val = preg_split("/[,]/", $value);
        $res = array();
        $res[] = $builder->where('eta', $val[0]);
        for ($x = 1; $x < count($val); $x++) {
            $res[] = $builder->orWhere('eta', $val[$x]);
        }
        return $res;
    }
}