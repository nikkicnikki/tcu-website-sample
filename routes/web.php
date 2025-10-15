<?php

use App\Http\Controllers\CampusLifeController;
use App\Http\Controllers\CollegeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Sample page
// Route::get('/sample1', function () {
//     return Inertia::render('sample1');
// });

Route::get('/colleges', [CollegeController::class, 'index'])->name('colleges.index');
Route::get('/colleges/{slug}', [CollegeController::class, 'show'])->name('colleges.show');

Route::get('/campus-life', [CampusLifeController::class, 'index'])->name('campus.life');

// Make /sample1 the default homepage
Route::get('/', function () {
    return Inertia::render('sample1');
});

Route::get('/ping', function () {
    return 'pong';
});

Route::get('/check-app-url', function () {
    return config('app.url');
});

Route::middleware(['auth', 'verified'])->group(function () {});
