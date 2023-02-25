<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\XmlController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\UserController;

Route::post('/read-xml', [XmlController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{subName}', [CategoryController::class, 'subcategory']);

Route::post('/register-user', [UserController::class, 'registerUser']);
Route::post('/login-user', [UserController::class, 'loginUser']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
