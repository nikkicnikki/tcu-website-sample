<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Sample page
// Route::get('/sample1', function () {
//     return Inertia::render('sample1');
// });
Route::get('colleges/cas', function () {
    return Inertia::render('colleges/cas');
});

// Make /sample1 the default homepage
Route::get('/', function () {
    return Inertia::render('sample1');
});

Route::get('/ping', function () {
    return 'pong';
});

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');
});

// require __DIR__ . '/settings.php';
// require __DIR__ . '/auth.php';