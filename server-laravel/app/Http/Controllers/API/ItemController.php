<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    public function index1($cateName)
    {
        // $items = DB::table('categories')
        // ->join('item_cates', 'categories.cate_id', '=', 'item_cates.cate_id')
        // ->join('items', 'item_cates.item_id', '=', 'items.id')
        // ->where('categories.cate_name', $cateName)
        // ->get();

        // $items = DB::table('items')
        //     ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
        //     ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
        //     ->select('items.title', 'items.image_link')
        //     ->where('categories.cate_name', $cateName)
        //     ->groupBy('items.title', 'items.image_link')
        //     ->paginate(12);

        $items = DB::table('items')
            ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
            ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
            ->where('categories.cate_name', $cateName)
            ->get();

            // $items2 = $items->groupBy('title');

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }
    public function index2($cateName, $subCateName)
    {
        // $items = DB::table('categories')
        // ->join('item_cates', 'categories.cate_id', '=', 'item_cates.cate_id')
        // ->join('items', 'item_cates.item_id', '=', 'items.id')
        // ->where('categories.cate_name', $cateName)
        // ->get();

        // $items = DB::table('items')
        //     ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
        //     ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
        //     ->select('items.title', 'items.image_link')
        //     ->where('categories.cate_name', $cateName)
        //     ->groupBy('items.title', 'items.image_link')
        //     ->paginate(12);

        $items = DB::table('items')
            ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
            ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
            ->where('categories.cate_name', $subCateName)
            ->get();

            // $items2 = $items->groupBy('title');

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function index3($cateName, $subCateName, $subSubCateName)
    {
        // $items = DB::table('categories')
        // ->join('item_cates', 'categories.cate_id', '=', 'item_cates.cate_id')
        // ->join('items', 'item_cates.item_id', '=', 'items.id')
        // ->where('categories.cate_name', $cateName)
        // ->get();

        // $items = DB::table('items')
        //     ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
        //     ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
        //     ->select('items.title', 'items.image_link')
        //     ->where('categories.cate_name', $cateName)
        //     ->groupBy('items.title', 'items.image_link')
        //     ->paginate(12);

        $items = DB::table('items')
            ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
            ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
            ->where('categories.cate_name', $subSubCateName)
            ->get();

            // $items2 = $items->groupBy('title');

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function index4($cateName, $subCateName, $subSubCateName, $subSubSubCateName)
    {
        // $items = DB::table('categories')
        // ->join('item_cates', 'categories.cate_id', '=', 'item_cates.cate_id')
        // ->join('items', 'item_cates.item_id', '=', 'items.id')
        // ->where('categories.cate_name', $cateName)
        // ->get();

        // $items = DB::table('items')
        //     ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
        //     ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
        //     ->select('items.title', 'items.image_link')
        //     ->where('categories.cate_name', $cateName)
        //     ->groupBy('items.title', 'items.image_link')
        //     ->paginate(12);

        $items = DB::table('items')
            ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
            ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
            ->where('categories.cate_name', $subSubSubCateName)
            ->get();

            // $items2 = $items->groupBy('title');

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }
}
