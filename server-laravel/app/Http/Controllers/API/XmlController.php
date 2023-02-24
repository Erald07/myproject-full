<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class XmlController extends Controller
{
    public function index()
    {
        $xmlDataString = file_get_contents(public_path('temp.xml'));
        $xmlObject = simplexml_load_string($xmlDataString, 'SimpleXMLElement', LIBXML_NOCDATA);

        $json = json_encode($xmlObject);
        $phpDataArray = json_decode($json, true);

        if (count($phpDataArray['channel']['item']) > 0) {

            $dataItem = array();
            $dataCategory = array();
            $gallery = array();
            $item_cate = array();

            foreach ($phpDataArray['channel']['item'] as $index => $data) {

                if (!(Item::where('id', $data['id'])->exists())) {
                    if( (int) $data['stock'] < 0)
                    {
                        $data['stock'] = $data['stock'] * (-1);
                    } 
                    $dataItem[$index] = [
                        "id" => $data['id'],
                        "mpn" => $data['mpn'] ? $data['mpn'] : "NULL",
                        "price" => $data['price'] ? $data['price'] : NULL,
                        "sale_price" => $data['sale_price'] ? $data['sale_price'] : NULL,
                        "vip_price" => $data['vip_price'] ? $data['vip_price'] : NULL,
                        "stock" => $data['stock'] ? $data['stock'] : NULL,
                        "availability" => $data['availability'] ? $data['availability'] : "NULL",
                        "taglia" => $data['taglia'] ? $data['taglia'] : "NULL",
                        "parent_id" => $data['parent_id'] ? $data['parent_id'] : NULL,
                        "title" => $data['title'] ? $data['title'] : "NULL",
                        "description" => $data['description'] ? $data['description'] : "NULL",
                        "link" => $data['link'] ? $data['link'] : "NULL",
                        "image_link" => $data['image_link'] ? $data['image_link'] : "NULL",
                        "product_type" => $data['product_type'] ? $data['product_type'] : "NULL",
                        "eta" => $data['eta'] ? $data['eta'] : "NULL",
                        "marche" => $data['marche'] ? $data['marche'] : "NULL",
                        "genere" => $data['genere'] ? $data['genere'] : "NULL",
                        "personaggi" => $data['personaggi'] ? $data['personaggi'] : "NULL",
                        "colore" => $data['colore'] ? $data['colore'] : "NULL",
                    ];

                    Item::insert($dataItem[$index]);

                }

                $lists = $data['categories'];

                if (isset($lists['list']['category1'])) {
                    foreach ($lists as $list) {
                        for ($i = 1; $i <= count($list); $i++){
                            if($i == 1)
                            {
                                $dataCategory[$i] = [
                                    'cate_id' => $list['category'.$i]['id'] ? $list['category'.$i]['id'] : "NULL",
                                    'cate_name' => $list['category'.$i]['name'] ? $list['category'.$i]['name'] : "NULL",
                                    'parent_cate_id' => "0",
                                ];
                            }
                            else{
                                $dataCategory[$i] = [
                                    'cate_id' => $list['category'.$i]['id'] ? $list['category'.$i]['id'] : "NULL",
                                    'cate_name' => $list['category'.$i]['name'] ? $list['category'.$i]['name'] : "NULL",
                                    'parent_cate_id' => $list['category'.($i-1)]['id'],
                                ];
                            }
                            if(!(Category::where('cate_id', $dataCategory[$i]['cate_id'])->where('cate_name', $dataCategory[$i]['cate_name'])->exists()))
                            {
                                DB::insert('insert into categories (cate_id, cate_name, parent_cate_id) values(?, ?, ?)', [$dataCategory[$i]['cate_id'], $dataCategory[$i]['cate_name'], $dataCategory[$i]['parent_cate_id']]);
                            }                            
                        }
                    }
                }
                else
                {
                    $i = 1;
                    foreach ($lists['list'][0] as $list) {
                        if($i == 1)
                        {
                            $dataCategory[$i] = [
                                'cate_id' => $list['id'] ? $list['id'] : "NULL",
                                'cate_name' => $list['name'] ? $list['name'] : "NULL",
                                'parent_cate_id' => "0",
                            ];
                        }
                        else{
                            $dataCategory[$i] = [
                                'cate_id' => $list['id'] ? $list['id'] : "NULL",
                                'cate_name' => $list['name'] ? $list['name'] : "NULL",
                                'parent_cate_id' => $list['id'],
                            ];
                        }
                        if(!(Category::where('cate_id', $dataCategory[$i]['cate_id'])->where('cate_name', $dataCategory[$i]['cate_name'])->exists()))
                        {
                            DB::insert('insert into categories (cate_id, cate_name, parent_cate_id) values(?, ?, ?)', [$dataCategory[$i]['cate_id'], $dataCategory[$i]['cate_name'], $dataCategory[$i]['parent_cate_id']]);
                        }
                        $i++;
                        
                    }
                }

                if (array_key_exists('gallery', $data)) {                            
                    foreach($data['gallery'] as $key => $image)
                    {
                        if(is_array($image))
                        {
                            for ($i = 0; $i < count($image); $i++) {
                                $gallery[$i] = [
                                    'item_id' => $data['id'] ? $data['id'] : "NULL",
                                    'image_name' => $image[$i] ? $image[$i] : "NULL"
                                ];
                                if(!(Gallery::where('item_id', $gallery[$i]['item_id'])->where('image_name', $gallery[$i]['image_name'])->exists()))
                                {
                                    DB::insert('insert into galleries (item_id, image_name) values(?, ?)', [$gallery[$i]['item_id'], $gallery[$i]['image_name']]);
                                }
                            }
                        }
                        else{
                            if(!(Gallery::where('item_id', $data['id'])->where('image_name', $data['gallery']['image'])->exists()))
                            {
                                DB::insert('insert into galleries (item_id, image_name) values(?, ?)', [$data['id'], $data['gallery']['image']]);
                            }
                        }  
                    }                
                }

                if (isset($lists['list']['category1'])) {
                    foreach ($lists as $list) {
                        for ($i = 1; $i <= count($list); $i++){
                            $item_cate[$i] = [
                                'item_id' => $data['id'] ? $data['id'] : "NULL",
                                'cate_id' => $list['category'.$i]['id'] ? $list['category'.$i]['id'] : "NULL",
                                'order_id' => $i ? $i : "0",
                            ];
                            if(!(ItemCate::where('item_id', $item_cate[$i]['item_id'])->where('cate_id', $item_cate[$i]['cate_id'])->exists())) {
                                DB::insert('insert into item_cates (item_id, cate_id, order_id) values(?, ?, ?)',[$item_cate[$i]['item_id'], $item_cate[$i]['cate_id'], $item_cate[$i]['order_id']]);
                            }                        
                        }
                    }
                }
                else
                {
                    $i = 1;
                    foreach ($lists['list'][0] as $list) {
                        $item_cate[$i] = [
                            'item_id' => $data['id'] ? $data['id'] : "NULL",
                            'cate_id' => $list['id'] ? $list['id'] : "NULL",
                            'order_id' => $i ? $i : "0",
                        ];
                        if(!(ItemCate::where('item_id', $item_cate[$i]['item_id'])->where('cate_id', $item_cate[$i]['cate_id'])->exists())) {
                            DB::insert('insert into item_cates (item_id, cate_id, order_id) values(?, ?, ?)',[$item_cate[$i]['item_id'], $item_cate[$i]['cate_id'], $item_cate[$i]['order_id']]);
                        }    
                        $i++;
                    }
                }
            }
        }
        return response()->json([
            'status' => 200,
            'message' => 'Data Added Successfully',
        ]);
    }
}
