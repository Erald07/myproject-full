<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{

    public function filter(Request $request){
        return Item::filter($request)->get();
    }

    public function index1($cateName, Request $request)
    {   
        $items = Item::filter($request)->whereHas('categories', function($q) use($cateName) {
            $q->where('cate_name', $cateName);
        })->with('parent')->with('galleries')->get();

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }
    public function index2($cateName, $subCateName, Request $request)
    {

        $items = Item::filter($request)->whereHas('categories', function($q) use($subCateName) {
            $q->where('cate_name', $subCateName);
        })->with('parent')->with('galleries')->get();

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function index3($cateName, $subCateName, $subSubCateName, Request $request)
    {
        $items = Item::filter($request)->whereHas('categories', function($q) use($subSubCateName) {
            $q->where('cate_name', $subSubCateName);
        })->with('parent')->with('galleries')->get();

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function index4($cateName, $subCateName, $subSubCateName, $subSubSubCateName, Request $request)
    {
        $items = Item::filter($request)->whereHas('categories', function($q) use($subSubSubCateName) {
            $q->where('cate_name', $subSubSubCateName);
        })->with('parent')->with('galleries')->get();

        return response()->json([
            'status' => 200,
            'items' => $items,
        ]);
    }

    public function item($title)
    {

        $item = Item::where('title', $title)->with('categories','galleries','parent')->first();

        $like_items = Item::whereHas('categories', function($q) use($item){
            $q->where('cate_name', $item->categories[0]->cate_name);
        })->with('galleries', 'parent')->take(4)->get();

        $same_marche = Item::whereHas('categories', function($q) use($item){
            $q->where('cate_name', $item->categories[0]->cate_name);
        })->where('marche', $item->marche)->with('galleries', 'parent')->get();

        return response()->json([
            'status' => 200,
            'item' => $item,
            'like_items' => $like_items,
            'same_marche' => $same_marche,
        ]);
    }

    public function specialItems(Request $request)
    {
        $special_items = Item::with('parent')->take(10)->get();
        $search = Item::filter($request)->with('parent')->take(100)->get();
        return response([
            'status' => 200,
            'special_items' => $special_items,
            'search' => $search,
        ]);
    }
}
