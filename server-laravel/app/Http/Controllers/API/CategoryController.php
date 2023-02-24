<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::where('cate_name', 'LIKE', 'MAMMA')
                                ->orWhere('cate_name', 'LIKE', 'Abbigliamento Bambino')
                                ->orWhere('cate_name', 'LIKE', 'Abbigliamento Bambina')
                                ->orWhere('cate_name', 'LIKE', 'Casa')
                                ->orWhere('cate_name', 'LIKE', 'PASSEGGINI')
                                ->orWhere('cate_name', 'LIKE', 'Auto & Viaggio')
                                ->orWhere('cate_name', 'LIKE', 'Gioco')
                                ->orWhere('cate_name', 'LIKE', 'Baby Food')
                                ->orWhere('cate_name', 'LIKE', 'PAPPA')
                                ->orWhere('cate_name', 'LIKE', 'Allattamento')
                                ->orWhere('cate_name', 'LIKE', 'Igiene')
                                ->where('parent_cate_id', 0)->get();

        return response()->json([
            'status' => 200,
            'categories' => $categories,
        ]);

    }
    public function category($subName)
    {
        $subcategory = Category::where('cate_name', $subName)->with('subcategory')->where('parent_cate_id', 0)->get();

        $subimage = DB::table('items')
        ->join('item_cates', 'items.id', '=', 'item_cates.item_id')
        ->join('categories', 'item_cates.cate_id', '=', 'categories.cate_id')
        ->select('price', 'sale_price', 'vip_price', 'items.image_link','items.title', 'items.marche')
        ->distinct()
        ->where('categories.cate_name', $subName)
        ->where('categories.parent_cate_id', 0)
        ->whereNotNull('items.price')
        ->whereNotNull('items.sale_price')
        ->first();


        return response()->json([
            'status' => 200,
            'subcategory' => $subcategory,
            'subimage' => $subimage
        ]);
    }
}
