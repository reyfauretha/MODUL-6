<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\bukuController;

Route::middleware('api')->group(function() {
    Route::resource('buku', bukuController::class);
});


