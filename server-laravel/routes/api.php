<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\XmlController;
use App\Http\Controllers\API\CategoryController;

Route::post('/read-xml', [XmlController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{subName}', [CategoryController::class, 'subcategory']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
